import React from "react"
import { useParams } from "react-router-dom"
import { MainLayout } from "../../Layout"
import QRCode from "react-qr-code"

function Ticket() {
    const { publicId } = useParams()
    return (
        <MainLayout>
            <section className="w-full h-screen flex items-center justify-center">
                <QRCode value={publicId} />
            </section>
        </MainLayout>
    )
}

export default Ticket
