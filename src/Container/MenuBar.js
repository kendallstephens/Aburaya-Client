import React from 'react';
import {Button, Container, Grid, Image, Segment} from 'semantic-ui-react'

const NavBar = ({selectFilter}) => {
  return (
    <div >
           <Container>
        <Segment vertical>
          <Grid container stackable textAlign='center' columns={3}>
            <Grid.Column>
              <Image 
                centered
                circular
                size='small'
                 />
                 <Button basic onClick={(e) => selectFilter(1)}>PLATES</Button>
            </Grid.Column>
            <Grid.Column>
              <Image 
                centered
                circular
                size='small'
                 />
              
                <Button basic onClick={(e) => selectFilter(3)}>SIDES</Button>
 
            </Grid.Column>
            <Grid.Column>
              <Image 
                centered
                circular
                size='small'
                 />
                <Button basic onClick={(e) => selectFilter(4)}>DRINKS</Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}

export default NavBar;