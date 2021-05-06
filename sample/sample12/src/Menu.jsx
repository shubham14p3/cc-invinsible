import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink activeClassName="active_class" to='/'>Home</NavLink>
      <NavLink activeClassName="active_class" to='/about'>About Us</NavLink>
      <NavLink activeClassName="active_class" to='/contact'>Contact Us</NavLink>
    </>
  );
};

export default Menu;
