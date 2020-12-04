import React, { Component} from 'react';
import CartItems from '../Components/CartItems'
import {Card, Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'


class CartContainer extends Component {
    
    getTotal = () => {
        let total = 0
        this.props.currentCart.forEach(item => {
          total += item.item.price
        })
        return total
      }

    
    render (){
        const {getTotal} = this
        const {currentCart, deleteOrderItem} = this.props

        if (this.props.currentCart.length > 0){
    return(
        <div className = 'cart'>
            <h3>Your Order</h3>
        <div>
        <Card.Group itemsPerRow={1}>
         {currentCart.map((item) =>(
             
            <CartItems
            key = {item.id} 
            item = {item}
            deleteOrderItem = {deleteOrderItem}
            />
            ))} 
        </Card.Group>
        <h3>Order Total: ${getTotal()}</h3>
        </div>
        <Button >
        <NavLink to='/payment'>
        Checkout
       </NavLink>
        </Button>
        </div>
       

        
        
         )}else{ 
    return(
        <div>
           <p> Add something to your cart!</p> 
            </div>
    )
    }
}
}

export default CartContainer;