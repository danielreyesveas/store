import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const publishableKey = 'pk_test_QCkEZcJPHDIJOJJaxHTPv8Hc00OAAyE8vo';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = (price * 100);

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Store Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}
 
export default StripeCheckoutButton;