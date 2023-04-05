import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore"
import { auth, db } from "./index"

export async function getEventById(eventId) {
    try {
        const res = await getDoc(doc(db, "events", eventId))
        return res.data()
    } catch (error) {
        console.log(error)
    }
}

export async function getTicketById(ticketId) {
    try {
        const res = await getDoc(doc(db, "tickets", ticketId))
        return res.data()
    } catch (error) {
        console.log(error)
    }
}

export async function getTicketByPublic(ticketPublic) {
    try {
        let sel_ticket
        const sel_query = query(
            collection(db, "tickets"),
            where("public", "==", ticketPublic)
        )
        const res = await getDocs(sel_query)
        res.forEach((resp) => {
            sel_ticket = resp.data()
        })
        return sel_ticket
    } catch (error) {
        console.log(error)
    }
}

export async function RegisterUser(userObj) {
    try {
        const { email, password, displayName, avatar } = userObj
        await createUserWithEmailAndPassword(auth, email, password)
        auth.currentUser.displayName = displayName
        auth.currentUser.photoURL = avatar
        console.log(auth.currentUser)
    } catch (error) {
        console.log(error)
    }
}

export async function LoginUser(userCreds) {
    try {
        const { email, password } = userCreds
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export async function CreateEvent(eventObj) {
    try {
        const newEvent = {
            ...eventObj,
            tickets: [],
            _id: crypto.randomUUID(),
            createdAt: "DATE STRING",
        }
        await setDoc(doc(db, "events", newEvent._id.toString()), newEvent)
        return newEvent
    } catch (error) {
        console.log(error)
    }
}

export async function RemoveEvent(eventId) {
    try {
        await deleteDoc(doc(db, "events", eventId.toString()))
        console.log("Event is removed")
    } catch (error) {
        console.log(error)
    }
}

export async function GenerateTicket(userId, input_event_id) {
    try {
        const newTicket = {
            _id: crypto.randomUUID(),
            userId,
            eventId: input_event_id,
            public: crypto.randomUUID(),
        }
        await setDoc(doc(db, "tickets", newTicket._id.toString()), newTicket)
        console.log("ticket is added")
    } catch (error) {
        console.log(error)
    }
}
export async function VerifyTicket(eventId_input, ticketPublic) {
    try {
        const sel_ticket = await getTicketByPublic(ticketPublic)
        if (sel_ticket.eventId === eventId_input.toString()) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}
