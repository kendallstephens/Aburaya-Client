import React, { Component } from 'react';
import MenuItems from '../Components/MenuItems'
import {Card} from 'semantic-ui-react'


class MenuContainer extends Component {
  
    render() {   
        const {items} = this.props
        
      return (
        
        <div>
        <Card.Group itemsPerRow={3}>
        {items.map((item) =>(
        <MenuItems
        key = {item.id} 
        item = {item}
        />
       ))} 
       </Card.Group>
        </div>
      
       
      );
    }
  }
  
  export default MenuContainer;