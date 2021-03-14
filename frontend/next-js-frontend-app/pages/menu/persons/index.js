import React, { useState } from 'react';
import List from 'react-list-select';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const res = await fetch('http://localhost:8888/api/persons');
  const persons = await res.json();

  return {
    props: {
      persons,
    },
  };
}

function Persons({ persons }) {
  // запрос мапрос по идее

  const router = useRouter();

  const [currentPerson, setCurrentPerson] = useState(persons.length === 0 ? null : persons[0]['id']);

  return (
    <div className='object'>
      <button onClick={() => router.push('/menu')}>Menu</button>
      <div className='item'>
        <h1>Persons</h1>
        <div className='box'>
          <List
            items={persons.map(person => `${person.firstName} ${person.lastName}`)}
            selected={[0]}
            onChange={(selected) => {
              setCurrentPerson(persons[selected]['id']);
            }}
            key={(selected) => selected}
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
            <button onClick={() => router.push(`/menu/persons/${currentPerson}/edit`)}>Edit person</button>
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
