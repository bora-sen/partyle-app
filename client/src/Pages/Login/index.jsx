import React, { useContext } from "react"
import { MainLayout } from "../../Layout"
import { LoginWithUsernameAndPassword } from "../../Controls"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {
    const { setUserAndSave } = useContext(AuthContext)
    const navigate = useNavigate()
    async function handleClick(e) {
        try {
            e.preventDefault()

            const username = document.querySelector("#input_username").value
            const password = document.querySelector("#input_password").value
            const resp = await LoginWithUsernameAndPassword({
                username,
                password,
            })
            console.log(resp)
            setUserAndSave(resp)
            navigate("/", { replace: false })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MainLayout>
            <section className="w-full h-screen flex md:flex-row flex-col-reverse">
                <div className="md:w-1/2 h-full flex items-center justify-center">
                    <form className="text-lg">
                        <div className="grid">
                            <label htmlFor="">username</label>
                            <input
                                type="text"
                                placeholder="foobar"
                                id="input_username"
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">password</label>
                            <input
                                type="password"
                                placeholder="************"
                                id="input_password"
                            />
                        </div>
                        <div className="grid">
                            <span className="text-sm">
                                Don't have an account ?{" "}
                                <a className="text-blue-700" href="/signup">
                                    Sign Up
                                </a>
                            </span>
                            <button
                                onClick={(e) => {
                                    handleClick(e)
                                }}
                                className="bg-black text-white font-bold py-2 my-2"
                            >
                                Login
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

export default Login
