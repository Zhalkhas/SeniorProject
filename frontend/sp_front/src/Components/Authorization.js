import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const baseURL = "http://localhost:8888"

function Authorization() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    /*useEffect(() => {
        
    }, [])*/

    function submitForm(e) {
        e.preventDefault()

        const newURL = baseURL + "/api/auth/login?username=admin&password=admin"
        console.log(newURL)

        axios.get(newURL, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        console.log({username})
        console.log({password})
    }

    return (
        <div className="Auth">
            <div>
                <form onSubmit={submitForm}>
                    <input type="text" id="username" onChange={e => setUsername(e.target.value)} placeholder="Username"></input>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    ) 
}

export default Authorization