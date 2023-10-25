import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import MainRouter from "./Routes/MainRouter"
import AuthProvider from "./Context/AuthContext"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
)
