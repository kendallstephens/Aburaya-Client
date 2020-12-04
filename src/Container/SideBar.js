import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './SideBar.css'
import {NavLink} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'


const SideBar = ({loggedIn}) => {
  return(
    <Menu>
    <NavLink to='/'><Icon name='home'/></NavLink>
    <NavLink to='/login'><Icon name='user'/></NavLink>
    <NavLink to='/menu'><Icon name='food'/></NavLink>
     {
         loggedIn ?
    <>
    <NavLink to='/cart' className="bm-item"><Icon name='cart'/></NavLink>
    </>
         :
     <>
    <NavLink to='/login' className="bm-item"><Icon name='user'/></NavLink>
    <NavLink to='/menu' className="bm-item"><Icon name='food'/></NavLink>
    </>
     }

</Menu>

  )
}

export default SideBar

