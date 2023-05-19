import React, { useContext, useEffect, useState } from "react"
import { MainLayout } from "../../Layout"
import { DeleteEvent, GetUserEvents } from "../../Controls"
import { AuthContext } from "../../Context/AuthContext"
import { Link } from "react-router-dom"

function MyEvents() {
    const [myEvents, setMyEvents] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadEvents()
    }, [])

    async function loadEvents() {
        setMyEvents(await GetUserEvents(user.username))
    }
    async function handleDelete(e, eventId) {
        try {
            e.preventDefault()
            const resp = await DeleteEvent(eventId, user.accessToken)
            if (resp === 200) {
                console.log("successfull")
                loadEvents()
            } else {
                console.log("error => ")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MainLayout>
            <section className="w-full flex gap-4">
                {myEvents.length > 0 &&
                    myEvents.map((event) => {
                        return (
                            <div
                                key={event.uuid}
                                className="p-4 border-2 hover:box-shadow transition-all border-black"
                            >
                                <div className="w-[20rem] aspect-video">
                                    <img
                                        src={event.placeholderURL}
                                        className="w-full h-full object-cover object-center"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold">
                                        {event.title}
                                    </span>
                                    <span>{event.description}</span>
                                </div>
                                <div className="grid p-2">
                                    <Link
                                        className="text-blue-500"
                                        to={`/event/${event.uuid}`}
                                    >
                                        Go To Event Page
                                    </Link>
                                    <Link
                                        className="text-blue-500"
                                        to={`/scanticket/${event.uuid}`}
                                    >
                                        Go To Scan Page
                                    </Link>
                                </div>
                                <button
                                    onClick={(e) => handleDelete(e, event.uuid)}
                                    className="text-red-500 block ml-auto"
                                >
                                    Delete This Event
                                </button>
                            </div>
                        )
                    })}
            </section>
        </MainLayout>
    )
}

export default MyEvents
