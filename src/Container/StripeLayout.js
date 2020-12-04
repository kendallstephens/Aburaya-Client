import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {Form, Grid, Button, Message, Segment} from 'semantic-ui-react'
import axios from 'axios'

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement)
        })
        if (!error){
            const {id} = paymentMethod

            try {
                const response = await axios.post('http://localhost:3000/charges', {id: 1, amount: 1099})
                // console.log(data)
            }catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <Grid textAlign='center' verticalAlign='middle'>
              <Grid.Column style={{maxWidth: 450}}>
              <Segment stacked>
   
     <Form
        onSubmit = {handleSubmit} 
        style = {{maxWidth: '400px', margin: '0 auto'}}>
       <CardElement />
       <button type='submit' disabled={!stripe}>
           Pay
       </button>
    </Form>
    </Segment>
    </Grid.Column>
   </Grid>
   
    )
}

const stripePromise = loadStripe('pk_test_51HoVTkG2MI9r9B4S2DUvy3XL9ndmqhoyGziflUPO5OkRQL0CwsBqUfPePjbnHilIMuwkoyN4mEMg2HNCiaJqPSyK00FbchydgH')

const StripeLayout = () => {
    return(
        <Elements stripe={stripePromise}>
        <CheckoutForm />
        </Elements>
    )
   
}



export default StripeLayout
