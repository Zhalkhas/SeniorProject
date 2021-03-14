import React from 'react'

function EditCamera() {

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
        <div className="edit">
            <button>Menu</button>
            <div className="item">
                <h1>Edit Camera</h1>
                <div className="box">
                    <div className="input-box">
                        <div className="input">
                            <label>Name</label>
                            <input type="text" placeholder={persons[1]}></input>
                        </div>
                        <div className="input">
                            <label>Zone</label>
                            <input type="select" placeholder="Main Floor"></input>
                        </div>
                        <div className="input">
                            <label>Connection</label>
                            <input type="text" placeholder="IP: 192.168.1.1"></input>
                            {/* <button>Edit Connection</button> */}
                        </div>
                    </div>
                    <div className="buttons-box">
                        <button>Cancel</button>
                        <button>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCamera