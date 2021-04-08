import { React, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Menu() {
  const router = useRouter();

  const items = {
    Persons: 'assets/images/menu_logos/user.svg',
    Cameras: 'assets/images/menu_logos/camera.svg',
    Actions: 'assets/images/menu_logos/action.svg',
    Configure: 'assets/images/menu_logos/configuration.svg',
  };

  const [logged, setLogged] = useState(true);

  return (
    <div className='menu'>
      <button
        onClick={() => {
          router.push('/');
        }}
      >
        Logout
      </button>
      <h1>Menu</h1>
      <div className='box'>
        {Object.entries(items).map(([key, value]) => {
          return (
            <div key={key}>
              <Link href={'/menu/' + key.toString().toLowerCase()}>
                <a style={{ textDecoration: 'none' }}>
                  <div className='item'>
                    <img src={value} alt='blank' width='150' height='150' />
                    <p>{key}</p>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
