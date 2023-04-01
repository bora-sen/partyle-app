import React from "react"
import { Route, Routes } from "react-router-dom"
import { Landing } from "../Pages"

function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    )
}

export default MainRouter
