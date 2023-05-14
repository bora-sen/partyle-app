import { createContext, useState } from "react"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const dummyUser = {
        username: "bborasen",
        displayName: "Bora Şen",
        accessToken: "jldsfjgkdlfjgprhprthşlfgh",
        refreshToken: "lsdfjerogjerpgdfşlgohlkd",
    }
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("tixly-user")) ?? false
    )
    function setUserAndSave(val) {
        localStorage.setItem("tixly-user", JSON.stringify(val))
        setUser(val)
    }

    const data = {
        user,
        setUserAndSave,
    }
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
