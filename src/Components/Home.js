import React from 'react'
import Footer from './Footer'
import {Button, Container, Grid, Image, Segment} from 'semantic-ui-react'
import home from '../Images/home.jpg'
import '../App.css'


const Home = ({selectFilter}) => {





  return(
    
    <div className='home-page'>
     {/* <img className='main-img' alt = 'main'/> */}

     <Segment  vertical textAlign='center'>
       <Container text>
       <h1>ABURAYA</h1>
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
      <Segment  vertical textAlign='center'>
      <Image 
                fluid
            
                src={home}
                 />
          </Segment>
        </Container>
        <Footer />
       
    </div>
  )
}

export default Home