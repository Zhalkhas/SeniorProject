import React from 'react'

function Menu() {

    const items = {
        "Persons": "/assets/user.svg",
        "Groups": "/assets/groups.svg",
        "Cameras": "/assets/camera.svg",
        "Zones & Rules": "/assets/zones_rules.svg",
        "Actions": "/assets/action.svg",
        "Configure": "/assets/configuration.svg"
    }

    return (
        <div className="menu">
            <button>Logout</button>
            <h1>Menu</h1>
            <div className="box">
                {Object.entries(items).map(([key, value]) => {
                    return(
                        <div className="item">
                            <img src={value} width="80" height="80"></img>
                            <p>{key}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Menu