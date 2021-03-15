import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const baseURL = 'http://localhost:8888';

function Authorization() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [auth, setAuth] = useState(false);
  const router = useRouter();

  let auth;

  function submitForm(e) {
    e.preventDefault();

    const URL = baseURL + `/api/auth/login?username=${username}&password=${password}`;

    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        auth = response.status === 200;

        if (auth) {
          router.push('/menu');
        }
      })
      .catch((error) => {
        console.log(error);

        alert('Invalid login or password \n\nHint: try to pretend being admin');
      });
  }

  return (
    <div className='auth'>
      <form onSubmit={submitForm}>
        <h1>Authorization</h1>
        <input type='text' id='username' onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button
          type='submit'
          // onClick={() => {
          //     if (auth) {
          //         router.push('/menu');
          //     } else {
          //         alert("Invalid login or password");
          //     }
          // }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Authorization;
