import React, { Component} from 'react';
import CartItems from '../Components/CartItems'
import {Card, Button} from 'semantic-ui-react'



class CartContainer extends Component {
   

    completeOrder = (order) => {
       fetch(`http://localhost:3000/orders/${order}`, {
           method: 'PATCH',
           headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
            complete: true
           })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
         this.props.completeOrder()
    })

}
   
    getTotal = () => {
        let total = 0
        this.props.currentCart.forEach(item => {
          total += item.item.price
        })
        return total
      }

    

      getTax = () => {
        let total = 0
        this.props.currentCart.forEach(item => {
          total += item.item.price
        })
        return total * 0.0925
      }
  

      
    
    render (){
        const {getTotal, getTax, completeOrder} = this
        const {currentCart, deleteOrderItem, order} = this.props
        console.log(order)

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
        <h5>Subtotal: ${getTotal().toFixed(2)}</h5>
        <h5>Tax: ${getTax().toFixed(2)}</h5>
         <h3>Total: ${getTotal() + getTax()}</h3>
        </div>
        <Button color='black' onClick={() => completeOrder(order)} >
        ORDER & PAY
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