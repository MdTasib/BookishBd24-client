import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ book }) => {
    // console.log(book.price);
    // console.log(book?.name);
    // console.log(book?.data);
    // console.log(book?.data?.orders);
    // console.log(book?.data?.orders[0]?.price);
    // const { price, qty, name } = book;
    // console.log(price);

    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(true);
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { price, qty, name, _id } = book;
    



    useEffect(() => {
        fetch(' http://localhost:5000/create-payment-intent', {
            method: 'POST',
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);

        // Confirm Card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed');

            //    Store payment on database
            const payment = {
                orders: _id,
                transactionId: paymentIntent._id
            }
            fetch(`http://localhost:5000/api/v1/place-order/${_id}`, {
                method: 'PATCH',
                body: JSON.stringify({ payment })
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
        }
    }

    if (isLoading) {
        return <p>Loading...</p>;
      }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-gray-900 text-white px-2 rounded-2xl mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;