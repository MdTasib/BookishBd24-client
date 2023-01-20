import React from 'react';

const Checkout = () => {
    return (
        <div className='bg-[#FFFFFF] p-4'>
            <h4 className='mb-2 text-xl'>Checkout Summary</h4>
            <hr className='mb-4' />
            <div className='inline py-2 pr-2'>
                <select className='border border-gray-400 w-[100%]' id="book">
                    <option value="saab">Bangladesh</option>
                    <option value="opel">India</option>
                    <option value="audi">Australia</option>
                    <option value="audi">Canada</option>
                    <option value="audi">China</option>
                    <option value="audi">Denmark</option>
                    <option value="audi">Italy</option>
                    <option value="audi">Japan</option>
                    <option value="audi">Kuwait</option>
                    <option value="audi">Malaysia</option>
                    <option value="audi">Netherlands</option>
                    <option value="audi">New Zealand</option>
                    <option value="audi">Norway</option>
                    <option value="audi">Oman</option>
                    <option value="audi">Poland</option>
                    <option value="audi">Portugal</option>
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