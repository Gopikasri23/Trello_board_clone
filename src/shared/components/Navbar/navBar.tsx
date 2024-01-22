import React, { useContext } from 'react'
import './navBar.css'
import { ModalContext } from '../../../context/ModalContext';

function NavBar() {
  const useModalContext = useContext(ModalContext);

  return (
    <div className='nav'>
      <div className='trello__icon'>
      </div>  
    </div>
  );
}

export default NavBar
