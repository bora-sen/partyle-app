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

function MainRouter() {
    return (
        <Routes>
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route
                path="/event/:uuid"
                element={
                    <ProtectedRoute redUrl="/login">
                        <EventPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default MainRouter
