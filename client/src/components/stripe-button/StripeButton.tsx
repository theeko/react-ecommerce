import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

interface StripeButtonProps {
  price: number;
}

export default function StripeButton({
  price
}: StripeButtonProps): JSX.Element {
  const priceForStripe = price * 100; //value in cents
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISABLE_KEY;

  const onToken = (token: any) => {
    axios
      .post("/payment", { amount: priceForStripe, token })
      .then(res => alert("Payment was successfull"))
      .catch(e => {
        console.log(`Payment error : ${e.message}`);
        alert("There was an issue with your payment. Please bla bla...");
      });
  };
  return (
    //@ts-ignore
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Inc."
      billingAddress
      shippingAdress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      // @ts-ignore
      stripeKey={publishableKey}
    />
  );
}
