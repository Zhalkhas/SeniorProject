import React from 'react'

function Groups() {

    const persons = [
        "First Shift",
        "Second Shift",
        "Third Shift",
        "Maintenance Staff",
        "Security Level 1",
        "Security Level 2",
        "Top Level Security",
    ]

    return (
        <div className="object">
            <button>Menu</button>
            <div className="item">
                <h1>Groups</h1>
                <div className="box">
                    <div className="list-box">
                        <h3>Group List</h3>
                        <ul>
                            {persons.map(person => {
                                return (
                                    <li><div>{person}</div></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="buttons-box">
                        <button>Add new group</button>
                        <button>Delete group</button>
                    </div>
                </div>
                <button id="done">Done</button>
            </div>
        </div>
    )
}

export default Groups