import React from 'react'

function Actions() {

    const persons = [
        "Call Police",
        "Alert Manager",
        "Alert Security",
        "Turn on Main Lights",
        "Turn on Back Lot Lights",
    ]

    return (
        <div className="object">
            <button>Menu</button>
            <div className="item">
                <h1>Actions</h1>
                <div className="box">
                    <div className="list-box">
                        <h3>Action List</h3>
                        <ul>
                            {persons.map(person => {
                                return (
                                    <li><div>{person}</div></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="buttons-box">
                        <button>Add new action</button>
                        <button>Edit action</button>
                        <button>Delete action</button>
                    </div>
                </div>
                <button id="done">Done</button>
            </div>
        </div>
    )
}

export default Actions