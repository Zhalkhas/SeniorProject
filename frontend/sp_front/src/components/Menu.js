import { React, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

function Menu() {

    const items = {
        "Persons": "/assets/user.svg",
        "Groups": "/assets/groups.svg",
        "Cameras": "/assets/camera.svg",
        "Zones & Rules": "/assets/zones_rules.svg",
        "Actions": "/assets/action.svg",
        "Configure": "/assets/configuration.svg"
    }

    const [logged, setLogged] = useState(true)

    function logout() {
        setLogged(false)
    }

    return (
        <div className="menu">
            {logged ? <button onClick={logout}>Logout</button> : <Redirect to="" />}
            <h1>Menu</h1>
            <div className="box">
                {Object.entries(items).map(([key, value]) => {
                    return(
                        <Link to={key.toLowerCase()} style={{textDecoration: "none"}}>
                            <div className="item">
                                <img src={value} width="80" height="80"></img>
                                <p>{key}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Menu