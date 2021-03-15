import { React, useState } from 'react';
import styles from '../edit.module.scss';
import RulesModal from '../../../../components/RulesModal';
import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';
import axios from 'axios';

function EditPerson(props) {
  const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let fName = '';
  let lName = '';

  const id = props.router.query.id;

  if (id !== -1) {
    const persons = props.router.components['/menu/persons'].props.pageProps.persons;

    for (let person of persons) {
      if (+person.id === +id) {
        fName = person.firstName;
        lName = person.lastName;
      }
    }
  }

  const listOfCameras = {
    'Floor Cam': '../../../assets/images/cams/cam_1.jpeg',
    'Admin Office 1': '../../../assets/images/cams/cam_2.jpeg',
    'Loading Dock Cam': '../../../assets/images/cams/cam_5.jpeg',
    Backyard: '../../../assets/images/cams/cam_6.jpeg',
  };

  const [rules, setRules] = useState([]);

  const RulesSection = rules.map((rule, index) => (
    <li key={index}>
      <div className={styles.rule}>
        <p>Rule: {rule}</p>
        <div>
          <button className={styles.button}>Edit</button>
          <button
            className={styles.button}
            onClick={() => setRules([...rules.slice(0, index), ...rules.slice(index + 1)])}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  ));

  const InfoSection = (
    <div>
      <p>
        First name:{' '}
        <input type='text' name='firstName' placeholder={fName} onChange={(e) => setFirstName(e.target.value)} />
      </p>
      <p>
        Last name:{' '}
        <input type='text' name='lastName' placeholder={lName} onChange={(e) => setLastName(e.target.value)} />
      </p>
    </div>
  );

  // modals state

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const dataTemplate = () => {
    return {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => {
        return { day, isActive: false };
      }),
      timeFrom: null,
      timeTo: null,
    };
  };

  const ModalDalUshel = (
    <RulesModal
      addRule={() => {
        setRules(['Monday, Friday, Sunday: from 10:00AM to 11:00AM']);
        toggle();
      }}
      styles={styles}
      modal={modal}
      setModal={setModal}
      toggle={toggle}
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
        <div className={styles.camera_preview}>
          <img src={value} width={300} height={250} />
          <p>{key}</p>
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
        {/* <button onClick={() => savePerson()} className={styles.button}>
          Save
        </button> */}
        <img className={styles.photo} src={defaultImage} />
        <div className={styles.info_text}>
          <p>{InfoSection}</p>
        </div>
        <button onClick={() => savePerson()} className={styles.save_button}>
          Add a person
        </button>
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

export default withRouter(EditPerson);
