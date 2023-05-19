import React, { useEffect, useState } from "react"
import { MainLayout } from "../../Layout"
import { GetRecentEventsByAmount } from "../../Controls"
import { Link } from "react-router-dom"

function Events() {
    const [events, setEvents] = useState(false)

    useEffect(() => {
        async function main() {
            setEvents(await GetRecentEventsByAmount())
        }
        main()
    }, [])
    return (
        <MainLayout>
            <section className="w-full">
                <div className="w-full flex flex-wrap items-center justify-center gap-12 py-2">
                    {events !== false &&
                        events.map((eventObj) => {
                            return (
                                <Link
                                    to={`/event/${eventObj.uuid}`}
                                    key={eventObj.uuid}
                                >
                                    <div className="w-[27rem] p-2 border-2 border-black hover:box-shadow transition-all">
                                        <div className="w-full aspect-video overflow-hidden">
                                            <img
                                                src={eventObj.placeholderURL}
                                                alt={`${eventObj.title}'s placeholder`}
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                        <div className="grid">
                                            <span className="text-3xl">
                                                {eventObj.title}
                                            </span>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xl">
                                                    {eventObj.createdBy}
                                                </span>
                                                <span className="text-xl">
                                                    {eventObj.createdAt}
                                                </span>
                                            </div>
                                            <span className="text-lg">
                                                {eventObj.description}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </section>
            <section className="w-full h-[20rem] flex items-center justify-center font-bevan text-3xl bg-gray-900 text-white mt-6">
                <Link to="/create">Create Event</Link>
            </section>
        </MainLayout>
    )
}

export default Events
