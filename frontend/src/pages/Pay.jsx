import { Button } from '@mui/material'
import React from 'react'
import './Pay.css'

import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';

import axios from 'axios';
const KEY = "pk_test_51KVFslSAFCHgE8koTn4mf1dxrLAalw71Jo4JMlqnyO9efXY8GTNYQqnoP2VKOOVsv8EmfzGnqO9T6Hj9gjrUncbn00eUIND7bJ"
function Pay() {

    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {

        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:8001/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                });
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken]);

    return (


        <div className='pay'>
            {stripeToken?Button(<span>Processing. Please wait...</span>):(
            <StripeCheckout
                name="AshTech"
                image='https://cdn.dribbble.com/users/121405/screenshots/14505164/media/110202d29fb9385a6725179308197de2.png'
                billingAddress
                shippingAddress
                description='Your total is 20 INR'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <Button> Pay Now</Button>

            </StripeCheckout>)}
        </div>
    )
}

export default Pay