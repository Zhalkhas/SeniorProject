import { React, useState } from 'react';
import styles from './edit.module.scss';
import RulesModal from '../../../components/RulesModal';
import list from 'react-list-select/dist/list';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function EditPerson() {
  const default_image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  const list_of_cameras = {
    url_1: 'camera 1',
    url_2: 'camera 2',
  };

  const [list_of_rules, setList_of_rules] = useState({
    rule_1: 'ne buhay Dolt',
    rule_2: 'ne kuri Dolt',
    rule_3: 'voobwe nichego ne delay Dolt',
  });

  const info = {
    Name: 'skr',
    Surname: 'bop',
    Age: 21512,
    Other: 'info',
  };

  const [actions, setActions] = useState([
    'Call Police',
    'Alert Manager',
    'Alert Security',
    'Turn on Main Lights',
    'Turn on Back Lot Lights',
  ]);

  const person_info = Object.entries(info).map(([key, value]) => {
    return (
      <p>
        {key}: {value}
      </p>
    );
  });

  // modals state

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const Modal_dal_ushel = (
    <RulesModal actions={actions} styles={styles} modal={modal} setModal={setModal} toggle={toggle} />
  );

  // map cameras

  const mapped_cameras = Object.entries(list_of_cameras).map(([key, value]) => {
    // допустим тут запрос-мапрос

    return (
      <>
        <div key={key} className={styles.single_camera}>
          <div className={styles.camera_preview}>
            {/*camera preview*/}
            {/*ниже key керек жок нарсе*/}
            {key}
          </div>
          <p className='camera-name'>{value}</p>
        </div>
      </>
    );
  });

  const mapped_rules = Object.entries(list_of_rules).map(([key, value]) => {
    return (
      <li>
        <div className={styles.rule}>
          <p>
            {key}: {value}
          </p>
          <div>
            <button className={styles.button}>Edit</button>
            {console.log(key)}
            <button className={styles.button}>Delete</button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.person_header}>Person Info</h1>
      <div className={styles.info_box}>
        <img className={styles.photo} src={default_image} />
        <div className={styles.info_text}>
          <p>{person_info}</p>
        </div>
      </div>
      <h1 className={styles.camera_header}>Cameras List</h1>
      <div className={styles.camera_box}>{mapped_cameras}</div>
      <h1 className={styles.rules_header}>Rules List</h1>
      <div className={styles.rules_box}>
        <ul>{mapped_rules}</ul>
        <button className={styles.add_rule_button} onClick={toggle}>
          Add Rule
        </button>
        {Modal_dal_ushel}
      </div>
    </div>
  );
}

export default EditPerson;
