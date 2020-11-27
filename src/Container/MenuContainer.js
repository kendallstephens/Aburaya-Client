import React, { Component } from 'react';
import MenuItems from '../Components/MenuItems'
import Home from '../Components/Home'
import {Card} from 'semantic-ui-react'


class MenuContainer extends Component {
 
  
    render() {   
     
        const {items, cart, filter, addToCart} = this.props
        // const {addToCart} = this

       

        const filterItems = (e) => {
          if(filter === 'none'){
            return items
          }
         if(filter === 1){
           return items.filter(i => i.category_id === 1)
         }
     
         if(filter === 3){
           return items.filter(i => i.category_id === 3)
         }
     
         if(filter === 4){
           return items.filter(i => i.category_id === 4)
         }

       }
        
      return (
        
        <div>
        <Card.Group itemsPerRow={3}>
        {filterItems().map((item) =>(
        <MenuItems
        key = {item.id} 
        item = {item}
        addToCart = {addToCart} 
        cart = {cart}
        />
       ))} 
       </Card.Group>
        </div>
      
       
      );
    }
  }
  
  export default MenuContainer;