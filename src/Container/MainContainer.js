import React, { Component} from 'react';
import MenuContainer from './MenuContainer'
import {Container} from 'semantic-ui-react'

const MenuItemsURL = 'http://localhost:3000/items'

class MainContainer extends Component {

    state = {
        items: [],
    }

    componentDidMount() {
        fetch(MenuItemsURL)
        .then(res => res.json())
        .then(items => {
          this.setState({items})
        })
       }

       selectItem = (id) => {
           this.setState({

           })
       }
  
    render() {   
        const {items} = this.state
        const {cart, addToCart} = this.props
       
      return (
        <div >
        <Container textAlign = 'center'>
        <div class= 'ui divider'></div>
        <MenuContainer items = {items} addToCart = {addToCart} cart = {cart}/>
        </Container>
            </div>
      );
    }
  }
  
  export default MainContainer;
