import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
// import { Redirect } from 'react-router-dom'

const baseURL = 'http://localhost:8888';

function Authorization() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  function submitForm(e) {
    e.preventDefault();

    const URL = baseURL + `/api/auth/login?username=${username}&password=${password}`;

    // axios.get(URL)
    //     .then(response => {
    //         console.log(response)

    //         setAuth(true)

    //         console.log(auth);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })

    if (username === 'admin' && password === 'admin') {
      setAuth(true);
    }
  }

  return (
    <div className='auth'>
      <form onSubmit={submitForm}>
        <h1>Authorization</h1>
        <input type='text' id='username' onChange={(e) => setUsername(e.target.value)} placeholder='Username'></input>
        <input
          type='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        ></input>
        <button
          type='submit'
          onClick={() => {
            router.push('/menu');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Authorization;
