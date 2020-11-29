import React from 'react'

function Cameras() {

    const persons = [
        "Floor Cam 1",
        "Floor Cam 2",
        "Floor Cam 3",
        "Admin Office 1",
        "Admin Office 2",
        "Entrance Cam",
        "Loading Dock Cam",
        "Backyard"
    ]

    return (
        <div className="cameras">
            <button>Menu</button>
            <div className="item">
                <h1>Cameras</h1>
                <div className="box">
                    <div className="list-box">
                        <h3>Camera List</h3>
                        <ul>
                            {persons.map(person => {
                                return (
                                    <li><div>{person}</div></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="buttons-box">
                        <button>Add new camera</button>
                        <button>Edit camera</button>
                        <button>Delete camera</button>
                    </div>
                </div>
                <button id="done">Done</button>
            </div>
        </div>
    )
}

export default Cameras