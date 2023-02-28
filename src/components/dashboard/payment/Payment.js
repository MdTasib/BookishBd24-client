import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0gMADuiIiaFlXNz9N5k6HXIPhnvURpmXcZeRZKvElE1vRaWTc2jUCiZQo6KHnurxrTpsvhinpjyKGlXZRDVFwg00cdBRF6R2');

const Payment = () => {
    return (
        <div className='bg-gray-100 pb-12 h-screen grid grid-cols-2 gap-4'>
            <div>
                <div className='text-center text-lg font-roboto py-2 w-96 mx-auto mt-5 bg-white mb-5 rounded-lg'>
                    <h3>PAY FOR YOUR Orders - <span className='text-[#1E88E5]'>Book Name</span></h3>
                    <p className=''>Please Pay : <span className='text-red-600'>$120</span></p>
                </div>
                <div className='bg-white rounded-2xl shadow-2xl w-96 mx-auto p-8 '>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
            <div>
                <div className='bg-white mt-5 w-64 py-4 rounded-md shadow-lg leading-10'>
                    <h4 className='ml-4 text-green-700 font-bold'>পেমেন্ট কিভাবে সম্পন্ন করবেন?</h4>
                    <p className='ml-4'>১. আপনার কার্ড নাম্বারটি দিন</p>
                    <p className='ml-4'>২. এক্সপায়ারেশন ডেট লিখুন</p>
                    <p className='ml-4'>৩. CVC লিখুন (তিন সংখ্যার ডিজিট)</p>
                    <p className='ml-4'>৪. এবং সবশেষে জিপ কোড দিন</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;