import React, { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function Header() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(e) {
        try {
            e.preventDefault()
            localStorage.removeItem("tixly-user")
            toast.success("Successfully logged out.")
            navigate(0, { replace: false })
        } catch (error) {
            console.log(error)
        }
    }
    function RightMenu() {
        if (user) {
            return (
                <div className="flex items-center gap-12">
                    <span>{user.displayName}</span>
                    <a href="/mytickets">My Tickets</a>
                    <button
                        onClick={(e) => {
                            handleLogout(e)
                        }}
                    >
                        Logout
                    </button>
                </div>
            )
        } else {
            return (
                <ul className="flex items-center gap-12">
                    <li>
                        <a className="btn-white" href="/signup">
                            Sign Up
                        </a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            )
        }
    }

    return (
        <nav className="w-full bg-black text-white sticky top-0 z-50 px-4 py-2">
            <div className="w-full h-auto flex items-center justify-between px-4">
                <a className="text-4xl font-bevan" href="/">
                    tixly
                </a>
                <RightMenu />
            </div>
        </nav>
    )
}

export default Header
