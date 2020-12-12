import React, { Component} from 'react'
import MenuBar from './MenuBar'
import MenuContainer from './MenuContainer'
import {Container} from 'semantic-ui-react'

const MenuItemsURL = 'http://localhost:3000/items'

class MainContainer extends Component {

    state = {
        items: [],
        filter: 'none',
    }

    componentDidMount() {
        fetch(MenuItemsURL)
        .then(res => res.json())
        .then(items => {
          this.setState({items})
        })
       }

      addToCart = (item) => {
        this.setState(prevState => {
          return {cart: [...prevState.cart, item]}
        })
      }
   

       selectFilter = filter => {
        this.setState({
          filter
        })
      }
  
    render() {   
        const {selectFilter} = this
        const {items, filter} = this.state
        const {cart, addToCart} = this.props
       
      return (

        <div >
        <Container textAlign = 'center'>
        <MenuBar selectFilter = {selectFilter} filter = {filter}/>
        <div class= 'ui divider'></div>
        <MenuContainer items = {items} addToCart = {addToCart} cart = {cart} filter = {filter}/>
        </Container>
            </div>
      );
    }
  }
  
  export default MainContainer;
