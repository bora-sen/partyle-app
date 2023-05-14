import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import { Toaster } from "react-hot-toast"

function MainLayout({ children }) {
    return (
        <main>
            <Header />
            <Toaster toastOptions={{ position: "bottom-center" }} />
            <section className="">{children}</section>
            <Footer />
        </main>
    )
}

export default MainLayout
