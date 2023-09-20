import { useState } from 'react';
import LoggedInBtns from './LoggedInBtns';

const NavBar = ({ loggedIn, setLoggedIn }) => {
  const [name, setName] = useState();
  // using state to get things from localStorage
  // const [todos, setTodos] = useState(localStorage.getItem('todos'))
  // console.log(name);

  const toggleLoggedIn = () => {
    setLoggedIn((currentState) => !currentState);
  };

  return (
    <nav>
      <div className='mr-10'>Hello {name ? name : 'there'}</div>
      <ul className='flex gap-6 pr-10 justify-end text-lg font-semibold'>
        <li className='hover:cursor-pointer'>Home</li>
        <li className='hover:cursor-pointer'>Add new Duck</li>
        {loggedIn ? (
          <li className='hover:cursor-pointer' onClick={toggleLoggedIn}>
            Logout
          </li>
        ) : (
          <LoggedInBtns setName={setName} toggleLoggedIn={toggleLoggedIn} />
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
