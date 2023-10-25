import React, { useContext } from "react"
import { MainLayout } from "../../Layout"
import { Register } from "../../Controls"
import Login from "../Login"
import { AuthContext } from "../../Context/AuthContext"

function SignUp() {
    const { setUserAndSave } = useContext(AuthContext)
    async function handleSignUp(e) {
        e.preventDefault()
        try {
            const displayName =
                document.getElementById("input_displayName").value
            const username = document.getElementById("input_username").value
            const email = document.getElementById("input_email").value
            const password = document.getElementById("input_password").value
            const resp = await Register({
                displayName,
                username,
                email,
                password,
            })
            await setUserAndSave(await Login({ username, password }))
            navigate("/")
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MainLayout>
            <section className="w-full h-screen flex md:flex-row flex-col-reverse">
                <div className="md:w-1/2 h-full flex items-center justify-center">
                    <form className="text-lg gap-2">
                        <div className="grid">
                            <label htmlFor="">Name Surname</label>
                            <input
                                id="input_displayName"
                                type="text"
                                placeholder="John Frank"
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">username</label>
                            <input
                                id="input_username"
                                type="text"
                                placeholder="johnfrankie"
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">email</label>
                            <input
                                id="input_email"
                                type="text"
                                placeholder="john@test.com"
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">password</label>
                            <input
                                id="input_password"
                                type="password"
                                placeholder="************"
                            />
                        </div>
                        <div className="grid">
                            <span className="text-sm">
                                Already have an account ?{" "}
                                <a className="text-blue-700" href="/login">
                                    Login
                                </a>
                            </span>
                            <button
                                onClick={(e) => {
                                    handleSignUp(e)
                                }}
                                className="bg-black text-white font-bold py-2 my-2"
                            >
                                SignUp
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 h-full bg-black overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-center"
                        src="https://loremflickr.com/1000/1000/cats"
                        alt=""
                    />
                </div>
            </section>
        </MainLayout>
    )
}

export default SignUp
