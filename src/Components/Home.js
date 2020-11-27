import React from 'react'
import {Button, Container, Grid, Image, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import home from '../Images/home.jpg'
import '../App.css'


const Home = ({selectFilter}) => {




  return(
    
    <div className='home-page'>
     <img className='main-img' />

     <Segment  vertical textAlign='center'>
       <Container text>
       <h1>ABURUYA</h1>
        <p>
         We are a punk rock influenced restaurant specializing in Japanese fried chicken and seasonal izakaya plates.
         Everything is freshly made in house, from marinades to sauces and seasonings.

         We source our produce fresh from local weekly farmers' markets and use organic and natural products. 
       
         Fun fact: 'Abura-ya' means 'Oil Shop' in Japanese!
       
         </p>
         <br />
       </Container>
     </Segment>
      <Container>
        <Segment vertical>
          <Grid container stackable textAlign='center' columns={3}>
            <Grid.Column>
              <Image 
                centered
                circular
                size='small'
                 />
{/*               
                <Link to='/menu'><Button basic onClick={(e) => this.selectFilter(1)}>PLATES</Button></Link> */}
                 <Button basic onClick={(e) => selectFilter(1)}>PLATES</Button>
            </Grid.Column>
            <Grid.Column>
              <Image 
                centered
                circular
                size='small'
                 />
              
                <Button basic onClick={(e) => selectFilter(3)}>SIDES</Button>
                {/* <Link to='/menu'><Button basic >SIDES</Button></Link> */}
            </Grid.Column>
            <Grid.Column>
              <Image 
                centered
                circular
                size='small'
                 />
                {/* <Link to='/menu'><Button basic onClick={(e) => selectFilter(4)}>DRINKS</Button></Link> */}
                <Button basic onClick={(e) => selectFilter(4)}>DRINKS</Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
      <Container>
      <Segment  vertical textAlign='center'>
      <Image 
                fluid
            
                src={home}
                 />
          </Segment>
        </Container>
       
    </div>
  )
}

export default Home