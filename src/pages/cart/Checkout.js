import React from 'react';

const Checkout = () => {
    return (
        <div className='bg-[#FFFFFF] p-4'>
            <h4 className='mb-2 text-xl'>Checkout Summary</h4>
            <hr className='mb-4' />
            <div className='inline  border border-gray-400 py-2 pr-2'>
                <select className='' id="book">
                    <option value="saab">Bangladesh</option>
                    <option value="opel">Discount - low to high</option>
                    <option value="audi">Discount - high to low</option>
                    <option value="audi">price - low to high</option>
                    <option value="audi">price - high to low</option>
                </select>
            </div>
            <div className='mt-4'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>291 TK.</p>
                </div>
                <hr />
                <div className='flex justify-between mt-4'>
                    <p>Shipping</p>
                    <p>250 TK.</p>
                </div>
                <hr />
                <div className='flex justify-between mt-4'>
                    <p>Total</p>
                    <p>341 TK.</p>
                </div>
                <hr />
                <div className='flex justify-between mt-4 font-bold text-primary'>
                    <p>Payable Total</p>
                    <p>341 TK.</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;