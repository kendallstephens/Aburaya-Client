import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react'



const CartItem = ({item, deleteOrderItem}) => {
  console.log(item.id)


    return (
     
             
      
      <Card>
        <div key = {item.id}>
          <Image src= {item.item.image} alt = 'Item' size = 'small'/>
          
   
      <Card.Content>
        <Card.Header>{item.item.name}</Card.Header>
        <Card.Description>{item.item.description}</Card.Description>
        <Card.Description>${item.item.price}</Card.Description>
        <Icon onClick={() => deleteOrderItem(item.id)} className = 'overlay' color ='grey' name = 'remove circle' key = {item.id} />
      </Card.Content>
      
     
  
      </div>
   </Card>
  
    );
  }
  
  export default CartItem;