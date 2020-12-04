import React from 'react'
import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51HoVTkG2MI9r9B4SrWOsXrXvRTcOgYT4mntjSKJIdIVjOB10IReIRTZyIHpUuz0czqjwdabtulxO7vD0GRx5hMfa00A3bPJmHS')

export default async (req, res) => {
    const {id, amount} = req.body

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'item',
            payment_method: id,
            confirm: true
        })

        console.log(payment)

        return res.status(200).json({
            confirm: 'abc123'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: error.message
        })

    }

}
