import React, { useContext } from "react"
import { MainLayout } from "../../Layout"
import { CreateEvent as CreateEventFromController } from "../../Controls"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

function CreateEvent() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    async function handleClick(e) {
        try {
            e.preventDefault()
            const title = document.getElementById("input_title").value
            const description = document.getElementById("input_desc").value
            const placeholderURL =
                document.getElementById("input_placeholder").value
            const maxPeople = document.getElementById("input_people").value
            const newEvent = {
                title,
                description,
                placeholderURL,
                maxPeople,
            }
            const resp = await CreateEventFromController(
                newEvent,
                user.accessToken
            )
            if (resp === 200) {
                console.log("success")
                navigate("/", { replace: false })
            } else {
                throw resp
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MainLayout>
            <section className="w-full h-screen flex items-center justify-center">
                <form action="" className="">
                    <div className="w-[24rem] grid gap-6 p-4">
                        <div className="grid">
                            <label htmlFor="">Title</label>
                            <input
                                id="input_title"
                                type="text"
                                placeholder="Enter Title Here.."
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">Image URL</label>
                            <input
                                id="input_placeholder"
                                type="text"
                                placeholder="Enter Image URL Here.."
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">Description</label>
                            <input
                                id="input_desc"
                                type="text"
                                placeholder="Enter Description Here.."
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">Max People</label>
                            <input
                                id="input_people"
                                type="number"
                                placeholder="Enter Max People Amount"
                            />
                        </div>
                        <div className="grid">
                            <button
                                onClick={(e) => handleClick(e)}
                                className="btn-black"
                            >
                                Create Event
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </MainLayout>
    )
}

export default CreateEvent
