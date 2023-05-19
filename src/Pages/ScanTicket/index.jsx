import React from 'react'
import { useParams } from 'react-router-dom'

function ScanTicket() {
    const {eventId} = useParams()
  return (
    <div>ScanTicket</div>
  )
}

export default ScanTicket