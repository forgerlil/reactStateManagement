import { useState } from 'react';

const LoggedInBtns = ({ setName, toggleLoggedIn }) => {
  const [loggedInState, setLoggedInState] = useState('You are logged out!');
  return (
    <>
      <li
        className='hover:cursor-pointer'
        onClick={() => {
          setName('Nora');
          toggleLoggedIn();
        }}
      >
        Login
      </li>
      <li>{loggedInState}</li>
      <li
        className='hover:cursor-pointer'
        onClick={() => {
          setName('Mochi');
          toggleLoggedIn();
        }}
      >
        Register
      </li>
    </>
  );
};

export default LoggedInBtns;
