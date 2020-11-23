import React, { Component} from 'react';
import MenuContainer from './MenuContainer'
import {Container} from 'semantic-ui-react'

const MenuItemsURL = 'http://localhost:3000/items'

class MainContainer extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        fetch(MenuItemsURL)
        .then(res => res.json())
        .then(items => {
          this.setState({items})
        })
       }
  
    render() {   
        const {items} = this.state
      return (
        <div >
        <Container textAlign = 'center'>
        <div class= 'ui divider'></div>
        <MenuContainer items = {items}/>
        </Container>
            </div>
      );
    }
  }
  
  export default MainContainer;
