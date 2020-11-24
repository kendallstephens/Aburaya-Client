import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import {Menu, Grid, Icon} from 'semantic-ui-react'



const Header = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item"><h2>Aburuya</h2></li>
        <NavLink to='/login' ><Icon className = 'overlay' color ='grey' name = 'user' /></NavLink> 
        <NavLink to='/logout'  activeStyle={{background: '#f1f3f3'}}> Logout </NavLink>
        <button onClick={() => console.log('hi, from Cart')}><Icon className = 'overlay' color = 'grey' name = 'cart' /></button>
      </ul>
    </div>
  );
}

export default Header;