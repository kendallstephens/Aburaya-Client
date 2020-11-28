import React, { Component} from 'react';
// import About from '../Components/About'
import Home from '../Components/Home'
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

      //  selectItem = (id) => {
      //      this.setState({

      //      })
      //  }

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
           {/* <About selectFilter = {selectFilter} filter = {filter}/> */}
        <Home selectFilter = {selectFilter} filter = {filter}/>
        <Container textAlign = 'center'>
        <div class= 'ui divider'></div>
        <MenuContainer items = {items} addToCart = {addToCart} cart = {cart} filter = {filter}/>
        </Container>
            </div>
      );
    }
  }
  
  export default MainContainer;
