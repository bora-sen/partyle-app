import React, { useContext, useEffect, useState } from "react"
import { GetUserTickets } from "../../Controls"
import { AuthContext } from "../../Context/AuthContext"
import { MainLayout } from "../../Layout"
import QRCode from "react-qr-code"

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
                <div className="p-12 flex flex-col gap-6">
                    {tickets !== false &&
                        tickets.map((ticket) => {
                            console.log(ticket.eventDescription)
                            return (
                                <div
                                    key={ticket.uuid}
                                    className="flex items-center"
                                >
                                    <div className="w-[10] h-[10]">
                                        <QRCode value={ticket.publicId} />
                                    </div>
                                    <div className="grid">
                                        <span className="text-2xl font-bold">
                                            {ticket.eventTitle}
                                        </span>
                                        <span>{ticket.eventDescription}</span>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </section>
        </MainLayout>
    )
}

export default MyTickets
