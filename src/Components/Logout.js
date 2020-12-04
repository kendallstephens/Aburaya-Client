import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = ({user}) => {
    console.log(user)
    return(
        <div className="item">
      <NavLink to='/logout'  activeStyle={{background: '#f1f3f3'}}> Logout </NavLink>
    </div>
       
    )
}

export default Home