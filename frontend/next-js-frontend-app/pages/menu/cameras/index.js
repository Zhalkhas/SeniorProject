import { React, useState } from 'react';
// import { Link } from 'react-router-dom'

function Cameras() {
  const [cameras, setCameras] = useState([
    'Floor Cam 1',
    'Floor Cam 2',
    'Floor Cam 3',
    'Admin Office 1',
    'Admin Office 2',
    'Entrance Cam',
    'Loading Dock Cam',
    'Backyard',
  ]);

  const [delWord, setdelWord] = useState('');

  return (
    <div className='object'>
      <button>Menu</button>
      <div className='item'>
        <h1>Cameras</h1>
        <div className='box'>
          <div className='list-box'>
            <h3>Camera List</h3>
            <ul>
              {cameras.map((camera) => {
                return (
                  <li>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setdelWord(camera);
                      }}
                    >
                      {camera}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='buttons-box'>
            <button>Add new camera</button>
            <Link to='cameras/edit' style={{ textDecoration: 'none' }}>
              <button>Edit camera</button>
            </Link>
            <button
              onClick={() => {
                setCameras(cameras.filter((word) => word !== delWord));
              }}
            >
              Delete camera
            </button>
          </div>
        </div>
        <button id='done'>Done</button>
      </div>
    </div>
  );
}

export default Cameras;
