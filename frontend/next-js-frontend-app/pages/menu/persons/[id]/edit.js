import { React, useState } from 'react';
import styles from '../edit.module.scss';
import RulesModal from '../../../../components/RulesModal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

function EditPerson() {

  const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  const router = useRouter();

  const listOfCameras = {
    url_1: 'camera 1',
    url_2: 'camera 2',
  };

  const [rules, setRules] = useState([]);

  const RulesSection = rules.map((rule, index) => (
      <li key={index}>
          <div className={styles.rule}>
              <p>Rule: {rule}</p>
              <div>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button} onClick={() => setRules([...rules.slice(0, index), ...rules.slice(index+1)]) }>Delete</button>
              </div>
          </div>
      </li>
  ));

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const InfoSection = (
      <div>
          <p>
              First name: <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)}/>
          </p>
          <p>
              Last name: <input type="text" name="lastName" onChange={e => setLastName(e.target.value)}/>
          </p>
      </div>
  );

  // modals state

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const dataTemplate = () => {
      return {
          days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
              .map(day => { return { day, isActive: false, } }),
          timeFrom: null,
          timeTo: null,
      };
  }

  const ModalDalUshel = (
    <RulesModal
        styles={styles} modal={modal} setModal={setModal} toggle={toggle}
        data={dataTemplate()}
    />
  );

  async function savePerson() {
      const response = await axios.post('http://localhost:8888/api/persons', {
          firstName,
          lastName,
      });

      if (response.status === 200) {
          await router.push('/menu/persons');
      }
  }

  // map cameras

  const mappedCameras = Object.entries(listOfCameras).map(([key, value]) => {
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

  return (
    <div className={styles.container}>
      <Link href='/menu/persons'>
        <button className={styles.back_button}>Back</button>
      </Link>
      <h1 className={styles.person_header}>Person Info</h1>
      <div className={styles.info_box}>
      <button onClick={() => savePerson()} className={styles.button}>Save</button>
        <img className={styles.photo} src={defaultImage} />
        <div className={styles.info_text}>
          <p>{InfoSection}</p>
        </div>
      </div>
      <h1 className={styles.camera_header}>Cameras List</h1>
      <div className={styles.camera_box}>{mappedCameras}</div>
      <h1 className={styles.rules_header}>Rules List</h1>
      <div className={styles.rules_box}>
        <ul>{RulesSection}</ul>
        <button className={styles.add_rule_button} onClick={toggle}>
          Add Rule
        </button>
        {ModalDalUshel}
      </div>
    </div>
  );
}

export default EditPerson;
