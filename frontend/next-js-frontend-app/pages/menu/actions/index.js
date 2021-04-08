import { React, useState } from 'react';
import List from 'react-list-select';
import RulesModal from '../../../components/RulesModal';
import styles from './actions.module.scss';
import Link from 'next/link';

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
    <>
      <Link href='/menu'>
        <button className={styles.button}>Back</button>
      </Link>
      <div>
        <h1 className={styles.actions_header}>Actions</h1>
        <div className={styles.actions_box}>
          <div className={styles.actions_list}>
            <List
              className={styles.list}
              items={actions}
              //   selected={[0]}
              onChange={(selected) => setdelWord(actions[selected])}
            />
          </div>
          <div className={styles.actions_buttons}>
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
      </div>
    </>
  );
}

export default Actions;
