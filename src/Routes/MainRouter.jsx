import React from "react"
import { Route, Routes } from "react-router-dom"
import {
    CreateEvent,
    EventPage,
    Events,
    Landing,
    Login,
    MyTickets,
    SignUp,
    Ticket,
} from "../Pages"
import ProtectedRoute from "./ProtectedRoute"
import MyEvents from "../Pages/MyEvents"
import NotFound from "../Pages/NotFound"
import ScanTicket from "../Pages/ScanTicket"

function MainRouter() {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/welcome" element={<Landing />} />
            <Route
                path="/"
                element={
                    <ProtectedRoute redUrl="/welcome">
                        <Events />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/events"
                element={
                    <ProtectedRoute redUrl="/login">
                        <Events />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/mytickets"
                element={
                    <ProtectedRoute redUrl="/login">
                        <MyTickets />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/ticket/:publicId"
                element={
                    <ProtectedRoute redUrl="/login">
                        <Ticket />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/create"
                element={
                    <ProtectedRoute redUrl="/login">
                        <CreateEvent />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/event/:uuid"
                element={
                    <ProtectedRoute redUrl="/login">
                        <EventPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/myevents"
                element={
                    <ProtectedRoute>
                        <MyEvents />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/scanticket/:eventId"
                element={
                    <ProtectedRoute>
                        <ScanTicket />
                    </ProtectedRoute>
                }
            />
            <Route exact path="*" element={<NotFound />} />
        </Routes>
    )
}

export default MainRouter
