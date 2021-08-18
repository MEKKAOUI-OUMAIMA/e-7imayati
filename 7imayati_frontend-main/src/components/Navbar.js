import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Container,  Navbar as BNavbar} from 'react-bootstrap';
import HeaderLogo from "../assets/img/headerlogo.svg";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <> 
     <div className="con">
      <nav className='navbar'>
        <div className='navbar-container1'>
        <img className="group-13" src={HeaderLogo} 
        width="177vw" height="51vh"/>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acceuil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                à propos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contactus' className='nav-links' onClick={closeMobileMenu}>
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </>

  );
}

export default Navbar;
