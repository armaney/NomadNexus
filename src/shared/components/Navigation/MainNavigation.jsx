import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Mainheader from './Mainheader'
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIElements/Backdrop'
import './MainNavigation.css'



function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
    {drawerIsOpen && <BackDrop onClick={closeDrawerHandler}/>}
    <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>

    <Mainheader>
      <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
        <span />
        <span/>
        <span/>
      </button>
      <h1 className='main-navigation__title'>
        <Link to='/'>YourPlaces</Link>
      </h1>
      <nav className='main-navigation__header-nav'>
        <NavLinks />
      </nav>
    </Mainheader>
    </React.Fragment>
  )
};

export default MainNavigation
