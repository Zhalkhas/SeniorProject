import { React, useState } from 'react';

function Actions() {
  const [delWord, setdelWord] = useState('');

  const [actions, setActions] = useState([
    'Call Police',
    'Alert Manager',
    'Alert Security',
    'Turn on Main Lights',
    'Turn on Back Lot Lights',
  ]);

  return (
    <div className='object'>
      <Link href='/menu'>
        <button>Back</button>
      </Link>
      <div className='item'>
        <h1>Actions</h1>
        <div className='box'>
          <div className='list-box'>
            <h3>Action List</h3>
            {/* <ul>
              {actions.map((action) => {
                return (
                  <li>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setdelWord(action);
                      }}
                    >
                      {action}
                    </a>
                  </li>
                );
              })}
            </ul> */}
          </div>
          <div className='buttons-box'>
            <button>Add new action</button>
            <button>Edit action</button>
            <button
              onClick={() => {
                setActions(actions.filter((word) => word !== delWord));
              }}
            >
              Delete action
            </button>
          </div>
        </div>
        <Link href='/menu'>
          <button id='done'>Done</button>
        </Link>
      </div>
    </div>
  );
}

export default Actions;
