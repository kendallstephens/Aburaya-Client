import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './SideBar.css'
import {NavLink} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'


const SideBar = ({loggedIn, user}) => {
  return(
     <div>
       {
           loggedIn ?
      <Menu>
      <NavLink to='/'><Icon name='home'/></NavLink>
      <NavLink to='/logout'><Icon name='user'/>Logout</NavLink>
      <NavLink to='/menu'><Icon name='food'/></NavLink>
      <NavLink to='/cart' className='bm-item'><Icon name='cart'/></NavLink>
      <NavLink to='/location'><Icon name='location arrow'/></NavLink>
      </Menu>
           :
           <Menu>
      <NavLink to='/'><Icon name='home'/></NavLink>
      <NavLink to='/login'><Icon name='user'/></NavLink>
      <NavLink to='/menu'><Icon name='food'/></NavLink>
      <NavLink to='/location'><Icon name='location arrow'/></NavLink>
      </Menu>
       }
       </div>


  )
}

export default SideBar

