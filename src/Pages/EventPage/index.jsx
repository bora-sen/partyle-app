import React, { useContext, useEffect, useState } from "react"
import { Link, generatePath, useNavigate, useParams } from "react-router-dom"
import { MainLayout } from "../../Layout"
import { toast } from "react-hot-toast"
import { GenerateTicket, GetEventById } from "../../Controls"
import { AuthContext } from "../../Context/AuthContext"
import QRCode from "react-qr-code"

function EventPage() {
    const [event, setEvent] = useState(false)
    const { uuid } = useParams()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        loadEvent()
    }, [])

    async function loadEvent() {
        setEvent(await GetEventById(uuid))
    }
    function SuccessToast({ ticketId,imageHash }) {
        return (
            <Link to={`/ticket/${ticketId}`} className="border-2 border-black p-2 rounded-lg">
                <div className="flex items-center gap-8">
                    <div className="w-[8rem] h-[8rem]">
                        <QRCode
                            value={imageHash}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <span>New Ticket Generated!!</span>
                </div>
            </Link>
        )
    }
    async function handleClick(e) {
        e.preventDefault()
        const resp = await GenerateTicket(
            event.uuid,
            event.title,
            event.description,
            user.accessToken
        )
        if (resp.status === 200) {
            const {uuid,publicId} = resp.data

            toast.custom(<SuccessToast ticketId={uuid} imageHash={publicId} />)
            navigate("/")
        } else {
            toast.error("Error")
        }
    }
    return (
        <MainLayout>
            <section className="w-full h-screen flex items-center justify-center">
                {!event == false && (
                    <div className="flex">
                        <div className="w-[30rem] overflow-hidden aspect-video">
                            <img
                                src={event.placeholderURL}
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-6xl font-bold">
                                {event.title}
                            </span>
                            <span className="text-lg">{event.title}</span>
                            <span className="text-lg">{event.description}</span>
                            <span>
                                Available space -{" "}
                                {event.maxPeople - event.peopleJoined}
                            </span>
                            <button
                                onClick={(e) => {
                                    handleClick(e)
                                }}
                                className="btn-black block mx-auto mt-4"
                            >
                                Join This Event!
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </MainLayout>
    )
}

export default EventPage
