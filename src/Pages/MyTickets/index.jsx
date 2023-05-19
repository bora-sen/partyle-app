import React, { useContext, useEffect, useState } from "react"
import { GetUserTickets } from "../../Controls"
import { AuthContext } from "../../Context/AuthContext"
import { MainLayout } from "../../Layout"
import QRCode from "react-qr-code"
import { Link } from "react-router-dom"

function MyTickets() {
    const [tickets, setTickets] = useState(false)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        async function main() {
            const resp = await GetUserTickets(user.accessToken)
            setTickets(resp.data)
        }
        main()
    }, [])
    return (
        <MainLayout>
            <section className="">
                <div className="p-12 flex gap-6">
                    {tickets !== false &&
                        tickets.map((ticket) => {
                            return (
                                <Link
                                    to={`/ticket/${ticket.uuid}`}
                                    key={ticket.uuid}
                                    className="flex flex-col items-center p-4 border-2 border-black hover:box-shadow transition-all"
                                >
                                    <QRCode
                                        className="w-36"
                                        value={ticket.publicId}
                                    />
                                    <div className="grid">
                                        <span className="text-2xl font-bold">
                                            {ticket.eventTitle}
                                        </span>
                                        <span>{ticket.eventDescription}</span>
                                    </div>
                                    <button className="btn-black mt-4">
                                        Delete Ticket
                                    </button>
                                </Link>
                            )
                        })}
                </div>
            </section>
        </MainLayout>
    )
}

export default MyTickets
