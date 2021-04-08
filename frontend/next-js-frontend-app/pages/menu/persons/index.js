import React, { useState } from 'react';
import List from 'react-list-select';
import { useRouter } from 'next/router';
import axios from 'axios';

export async function getStaticProps() {
  const res = await fetch('http://backend:8888/api/persons');
  const persons = await res.json();

  return {
    props: {
      persons,
    },
  };
}

async function deletePerson(url) {
  axios
    .delete(url)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function Persons({ persons }) {
  // запрос мапрос по идее
  // console.log(persons);
  const temp = 'hello';
  const router = useRouter();

  const [currentPerson, setCurrentPerson] = useState(persons.length === 0 ? null : persons[0]['id']);

  const list = (
    <List
      items={persons.map((person) => `${person.firstName} ${person.lastName}`)}
      // selected={[0]}
      onChange={(selected) => {
        setCurrentPerson(persons[selected]['id']);
        console.log(currentPerson);
      }}
      key={(selected) => selected}
    />
  );

  return (
    <div className='object'>
      <button onClick={() => router.push('/menu')}>Menu</button>
      <div className='item'>
        <h1>Persons</h1>
        <div className='box'>
          {list}
          <div className='buttons-box'>
            <button onClick={() => router.push('/menu/persons/-1/edit')}>Add new person</button>
            <button
              onClick={() => {
                // console.log(persons);
                router.push({ pathname: `/menu/persons/${currentPerson}/edit`, state: { persons: 'hello' } });
              }}
            >
              Edit person
            </button>
            <button onClick={() => deletePerson(`http://backend:8888/api/persons/${currentPerson}`)}>
              Delete person
            </button>
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
