import React from "react";
import loadDone from "./Done.png";
import "./Done.css"

export default function Done({setDone}) {
    return(
        <div className = "done-wrapper">
            <h1 className="done-title">Registration is done</h1>
            <img src = {loadDone} alt = "Done" className = "main-done-img"/>
            <button onClick = {() => setDone(false)} className = "main-register-again">Register again</button>
        </div>
    )
}