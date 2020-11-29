import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = "http://localhost:8888"

function Authorization() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function submitForm(e) {
        e.preventDefault()

        const URL = baseURL + `/api/auth/login?username=${username}&password=${password}`

        axios.get(URL)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        // console.log(URL)
        // console.log({username})
        // console.log({password})
    }

    return (
        <div className="auth">
            <form onSubmit={submitForm}>
                <h1>Authorization</h1>
                <input type="text" id="username" onChange={e => setUsername(e.target.value)} placeholder="Username"></input>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    ) 
}

export default Authorization