import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeStyle= { color:"#2d5ff5",paddingBottom: '10px'};
    return(
        <nav className='navContainer'>
            <NavLink to="/" className='navStyle homealign' activeStyle={activeStyle} exact>
            Home
            </NavLink>
            <NavLink to="/user"  className='navStyle' activeStyle={activeStyle}>
            Services
            </NavLink>
        </nav>
    );
};

export default NavBar;
