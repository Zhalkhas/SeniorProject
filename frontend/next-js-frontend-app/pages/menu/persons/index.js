import React from 'react';
import List from 'react-list-select';
import { useRouter } from 'next/router';

function Persons() {
  // запрос мапрос по идее

  const persons = ['Ben Tyler', 'Alisher Sultanov', 'Ablan Abkenov', 'Daulet Amirkhanov', 'Zhalgas Khassenov'];

  const router = useRouter();

  return (
    <div className='object'>
      <button onClick={() => router.push('/menu')}>Menu</button>
      <div className='item'>
        <h1>Persons</h1>
        <div className='box'>
          <List
            items={persons}
            selected={[0]}
            onChange={(selected) => {
              console.log(persons[selected]);
            }}
          />
          {/* <div className='list-box'>
            <h3>Person List</h3>
            <ul>
              {persons.map((person) => {
                return (
                  <li>
                    <div>{person}</div>
                  </li>
                );
              })}
            </ul>
          </div> */}
          <div className='buttons-box'>
            <button>Add new person</button>
            <button onClick={() => router.push('/menu/persons/edit')}>Edit person</button>
            <button>Delete person</button>
          </div>
        </div>
        <button id='done' onClick={() => router.push('/menu')}>
          Done
        </button>
      </div>
    </div>
  );
}

export default Persons;
