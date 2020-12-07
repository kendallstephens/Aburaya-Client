import React from 'react'
import Footer from './Footer'
import {Button, Container, Grid, Image, Segment} from 'semantic-ui-react'
import home from '../Images/home.jpg'
import '../App.css'


const PaymentConfirmation = ({selectFilter}) => {





  return(
    
    <div>
     {/* <img className='main-img' alt = 'main'/> */}

     <Segment  vertical textAlign='center'>
       <Container text>
        <p>Your payment was successful and your order will be ready for pickup in 30-45 min</p>
        <p>Arigato!</p>
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

export default PaymentConfirmation