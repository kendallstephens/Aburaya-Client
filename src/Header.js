import React from 'react';
import {Icon} from 'semantic-ui-react'

const Header = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item"><h2>Aburuya</h2></li>
        <button onClick={() => console.log('hi, from sign in')}><Icon className = 'overlay' color ='grey' name = 'user' /></button> 
        <button onClick={() => console.log('hi, from Cart')}><Icon className = 'overlay' color = 'grey' name = 'cart' /></button>
      </ul>
    </div>
  );
}

export default Header;