import React from "react"
import { useParams } from "react-router-dom"

function Ticket() {
    const { publicId } = useParams()
    return <div>Ticket public id - {publicId}</div>
}

export default Ticket
