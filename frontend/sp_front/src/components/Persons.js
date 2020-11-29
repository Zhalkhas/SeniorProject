import React from 'react'

function Persons() {

    const persons = [
        "Ben Tyler",
        "Alisher Sultanov",
        "Ablan Abkenov",
        "Daulet Amirkhanov",
        "Zhalgas Khassenov"
    ]

    return (
        <div className="object">
            <button>Menu</button>
            <div className="item">
                <h1>Persons</h1>
                <div className="box">
                    <div className="list-box">
                        <h3>Person List</h3>
                        <ul>
                            {persons.map(person => {
                                return (
                                    <li><div>{person}</div></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="buttons-box">
                        <button>Add new person</button>
                        <button>Edit person</button>
                        <button>Delete person</button>
                    </div>
                </div>
                <button id="done">Done</button>
            </div>
        </div>
    )
}

export default Persons