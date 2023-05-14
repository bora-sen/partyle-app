import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ redUrl, children }) {
    const { user } = useContext(AuthContext)

    if (user !== false) {
        return children
    } else {
        return <Navigate to={redUrl} />
    }
}

export default ProtectedRoute
