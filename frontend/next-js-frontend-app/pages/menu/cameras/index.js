import { React, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './cameras.module.scss';

function Cameras() {
  // const [cameras, setCameras] = useState([
  //   'Floor Cam 1',
  //   'Floor Cam 2',
  //   'Floor Cam 3',
  //   'Admin Office 1',
  //   'Admin Office 2',
  //   'Entrance Cam',
  //   'Loading Dock Cam',
  //   'Backyard',
  // ]);

  // const [delWord, setdelWord] = useState('');

  const cameras_list = {
    'Floor Cam': '../../../assets/images/cams/cam_1.jpeg',
    'Admin Office 1': '../../../assets/images/cams/cam_2.jpeg',
    'Admin Office 2': '../../../assets/images/cams/cam_3.jpeg',
    'Entrance Cam': '../../../assets/images/cams/cam_4.jpeg',
    'Loading Dock Cam': '../../../assets/images/cams/cam_5.jpeg',
    Backyard: '../../../assets/images/cams/cam_6.jpeg',
  };

  const router = useRouter();

  const mapped_cams = Object.entries(cameras_list).map(([key, value]) => {
    return (
      <div className={styles.camera_preview}>
        <img src={value} width={300} height={250} />
        <p>{key}</p>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <Link href='/menu'>
        <button>Back</button>
      </Link>
      <div>
        <h1 className={styles.cameras_header}>Cameras Preview</h1>
        <div className={styles.camera_box}>{mapped_cams}</div>
      </div>
    </div>
  );
}

export default Cameras;
