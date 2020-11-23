import React from 'react';
import {Card, Image} from 'semantic-ui-react'

const MenuItems = ({item}) => {

    return (
      <Card>
        <div key = {item.id}>
          <Image src= {item.image} alt = 'Item'/>
   
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Description>{item.description}</Card.Description>
        <Card.Description>${item.price}</Card.Description>
      </Card.Content>
  
      </div>
   </Card>
    );
  }
  
  export default MenuItems;



