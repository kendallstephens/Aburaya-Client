import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from '../Components/CheckoutForm' 

class FormContainer extends Component {
    render() {
        return (
            <StripeProvider apiKey='pk_test_51HoVTkG2MI9r9B4S2DUvy3XL9ndmqhoyGziflUPO5OkRQL0CwsBqUfPePjbnHilIMuwkoyN4mEMg2HNCiaJqPSyK00FbchydgH'>
                <Elements>
                    <CheckoutForm orderId={this.props.id}/>
                </Elements>
            </StripeProvider>
   
        )
    }
}
export default FormContainer