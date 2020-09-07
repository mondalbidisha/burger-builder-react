import React from 'react';
import Header from './Header/Header';

const NavBar = (props) => {
  return (
    <Header 
      title={props.title}
      navItems={props.navItems}
    />      
  )
}

export default NavBar;