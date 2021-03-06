import React from 'react'
import { useState } from "react"
import { loadStripe } from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {Form, Grid, Segment} from 'semantic-ui-react'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'

const CheckoutForm = ({user_id, total, confirmPayment}) => {
    console.log(Math.trunc(total))
    const [checkoutError, setCheckoutError] = useState();
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        
        fetch('http://localhost:3000/charges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                checkout_user_id: user_id,
                amount: Math.trunc(total)
            }),
        })
        .then(resp => resp.json())
        .then(data => {
            const result = stripe.confirmCardPayment(
                data.client_secret, {
                    payment_method: {
                        card: cardElement
                    }
                }
            ).then(resp => {
                if (resp.error){
                    setCheckoutError(result.error.message)
                } else if (resp.paymentIntent && resp.paymentIntent.status === 'succeeded'){
                   confirmPayment()                    
                }
            })
        }) 
        const cardElement = elements.getElement('card');
        if (!stripe || !elements) {
            return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
    });
    if (error) {
        setCheckoutError(error.message);
        return;
    }
    else {
        return <Redirect to='/complete' push = {true}/>
    }}
      
    return (
        <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 450}}>
                <Segment stacked>
                    <Form
                    onSubmit = {handleSubmit} 
                    style = {{maxWidth: '400px', margin: '0 auto'}}>
                        <CardElement />
                        <button type='submit' disabled={!stripe} >Pay</button>
                    </Form>
                </Segment>
            </Grid.Column>
         </Grid>
    )
}

const stripePromise = loadStripe('pk_test_51HoVTkG2MI9r9B4S2DUvy3XL9ndmqhoyGziflUPO5OkRQL0CwsBqUfPePjbnHilIMuwkoyN4mEMg2HNCiaJqPSyK00FbchydgH')

const StripeLayout = ({user_id, total, tax, confirmPayment}) => {
    
    return(
     
        <Elements stripe={stripePromise}>
        <CheckoutForm user_id = {user_id} total = {total} confirmPayment = {confirmPayment}/>
        </Elements>   
       
    )
   
}



export default StripeLayout
