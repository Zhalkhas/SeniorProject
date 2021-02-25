import { React, useState } from 'react'
import styles from './edit.module.scss'
import RulesModal from '../../../components/RulesModal'
import Modal from 'react-bootstrap/Modal'

function EditPerson() {

    const default_image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

    const list_of_cameras = {
        url_1: 'tuta',
        url_2: 'zdesya'
    }

    const info = {
        Name: 'skr',
        Surname: 'bop',
        Age: 21512
    }

    const person_info = Object.entries(info).map(([key, value]) => {
        return(
            <>
                <p>{key}: {value}</p>
            </>
        )
    })

    const [modalShow, setModalShow] = useState(false);

    const mapped_cameras = Object.entries(list_of_cameras).map(([key, value]) => {
        // допустим тут запрос-мапрос

        return(
            <>
                <button className={styles.single_camera} onClick={() => setModalShow(true)}>
                    <div className="camera-preview">
                        {/*camera preview*/}
                        {key}
                    </div>
                    <p className="camera-name">{value}</p>
                </button>

                <RulesModal 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        )
    })

    return(
        <div className={styles.container}>
            <div className={styles.info_box}>
                <img className={styles.photo} src={default_image}/>
                <div className={styles.info_text}>
                    <pre>
                        {person_info}
                    </pre>
                </div>
            </div>
            <div className={styles.camera_box}>
                {mapped_cameras}
            </div>
        </div>
    )
}

export default EditPerson;