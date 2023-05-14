import axios from "axios"
import { api_url } from "./Config"

export async function LoginWithUsernameAndPassword(loginObj) {
    try {
        const resp = await axios.post(`${api_url}/auth/login`, loginObj)
        return resp.data
    } catch (error) {
        console.log(error)
    }
}
export async function Register(registerObj) {
    try {
        const resp = await axios.post(`${api_url}/auth/register`, registerObj)
        console.log("Returning -> ", resp)
        return resp
    } catch (error) {
        console.log(error)
    }
}

export async function GetRecentEventsByAmount() {
    try {
        const resp = await axios.get(`${api_url}/events`)
        return resp.data
    } catch (error) {
        console.log(error)
    }
}

export async function GetEventById(eventId) {
    try {
        const resp = await axios.get(`${api_url}/events/${eventId}`)
        return resp.data
    } catch (error) {
        console.log(error)
    }
}

export async function GenerateTicket(eventId, eventTitle,eventDescription, accessToken) {
    try {
        const resp = await axios.post(
            `${api_url}/tickets/generate`,
            { eventId, eventTitle,eventDescription },
            { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        return resp
    } catch (error) {
        console.log(error)
    }
}
export async function ValidateTicket(eventId, publicId, accessToken) {
    try {
        const resp = await axios.post(
            `${api_url}/tickets/validate`,
            { eventId, publicId },
            { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        return resp
    } catch (error) {
        console.log(error)
    }
}
export async function CreateEvent(eventObj, accessToken) {
    try {
        const resp = await axios.post(`${api_url}/events/create`, eventObj, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        return resp
    } catch (error) {
        console.log(error)
    }
}

export async function DeleteEvent(eventId, accessToken) {
    try {
        const resp = await axios.delete(`${api_url}/events/delete`, {
            data: { eventId },
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        return resp
    } catch (error) {
        console.log(error)
    }
}

export async function GetUserTickets(accessToken) {
    try {
        const resp = await axios.get(`${api_url}/tickets`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        return resp
    } catch (error) {
        console.log(error)
    }
}
