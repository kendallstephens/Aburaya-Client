import React from 'react';
import {NavLink} from 'react-router-dom'
import {Button, Icon, Container, Menu} from 'semantic-ui-react'



const Header = () => {
  return (
    <div className="nav-bar">

              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item >
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button >
                    <NavLink to='/login' ><Icon className = 'overlay' color ='grey' name = 'user' /></NavLink> 
                    </Button>
                  </Menu.Item>
                  <Menu.Item>
                  <Button>
                     <NavLink to='/cart'><Icon className = 'overlay' color = 'grey' name = 'cart'/></NavLink>
                  </Button>
                  </Menu.Item>
                </Menu>
              </Container> 

    </div>
  );
}

export default Header;