import React from "react"
import { NavLink } from "react-router-dom"
import style from "./style.module.css"

function Landing() {
    return (
        <div className={style.inner}>
            <div className={style.card}>
                <h1>Welcome to Partyle</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque, explicabo! Enim reiciendis voluptates ab?
                    Praesentium in cum illum placeat obcaecati magni, dolor
                    officia et?
                </p>
                <NavLink className="text-white bg-black px-4 py-2" to="/home">
                    Explore Parties
                </NavLink>
            </div>
        </div>
    )
}

export default Landing
