import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import { useGetOrderByIdQuery } from '../../../features/api/apiSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../ui/Loading';

const stripePromise = loadStripe('pk_test_51L0gMADuiIiaFlXNz9N5k6HXIPhnvURpmXcZeRZKvElE1vRaWTc2jUCiZQo6KHnurxrTpsvhinpjyKGlXZRDVFwg00cdBRF6R2');

const Payment = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();

    const { data: book, isLoading, isError, error } = useGetOrderByIdQuery({id:id,email:user?.email});
    
    let content = null;

	if (isLoading || loading) {
		content = <Loading />;
	}
    if ((!isLoading && isError)) {
		content = <p className='text-red-500'>{error}</p>;
	}
    // console.log(book?.data?.orders[0]);
    if (!isLoading && !isError) {
		content = (
            <div>
                <div className='text-center text-lg font-roboto py-2 w-96 mx-auto mt-5 bg-white mb-5 rounded-lg'>
                    <h3>PAY FOR YOUR Orders - <span className='text-green-500 font-bold text-sm'>{book?.data?.orders[0].name}</span></h3>
                    <p>Total quantity : <span className='text-red-600 font-bold'>{book?.data?.orders[0].qty}</span></p>
                    <p>Please Pay : <span className='text-red-600 font-bold'>${book?.data?.orders[0].price * book?.data?.orders[0].qty}</span></p>
                </div>
            </div>

        )
        }

    return (
        <div className='bg-gray-100 pb-12 h-screen grid grid-cols-2 gap-4'>
            <div>
                {content}
                <div className='bg-white rounded-2xl shadow-2xl w-96 mx-auto p-8 '>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm book={book?.data?.orders[0]} />
                    </Elements>
                </div>
            </div>
            <div>
                <div className='bg-white mt-5 w-64 py-4 rounded-md shadow-lg leading-8 px-4'>
                    <h4 className='text-green-700 font-bold'>পেমেন্ট কিভাবে সম্পন্ন করবেন?</h4>
                    <p>১. কার্ড নাম্বারটি দিন - 4242 4242 4242 4242</p>
                    <p>২. এক্সপায়ারেশন ডেট লিখুন - 12 / 25</p>
                    <p>৩. CVC লিখুন - 124</p>
                    <p>৪. এবং সবশেষে জিপ কোড দিন - 87521</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;