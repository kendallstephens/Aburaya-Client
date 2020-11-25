import React from 'react';
import {NavLink} from 'react-router-dom'
import {Button, Icon, Container, Menu, Item, Segment} from 'semantic-ui-react'



const Header = () => {
  return (
    <div className="nav-bar">

              <Container>
                <Menu inverted pointing secondary size='small'>
                  <Menu.Item >
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button >
                    <NavLink to='/login' ><Icon className = 'overlay' color ='grey' name = 'user' /></NavLink> 
                    </Button>
                  </Menu.Item>
                  <Menu.Item>
                     <Button onClick={() => console.log('hi, from Cart')}><Icon className = 'overlay' color = 'grey' name = 'cart'/></Button>
                  </Menu.Item>
                </Menu>
              </Container> 

    </div>
  );
}

export default Header;