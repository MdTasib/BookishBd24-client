import React from 'react';
import bookimg from "../../../assets/images/book.png";

const OrderBook = () => {
    return (
        <div className='bg-[#F3F6FC] h-[100vh]'>
            <div className='grid grid-cols-4 gap-4'>
                <div className=''>
                    <div className='flex gap-4 border bg-white mt-2 ml-2 p-4 rounded-md shadow-md'>
                        <div>
                            <img className='h-16' src={bookimg} alt="" />
                        </div>
                        <div>
                            <h4 className='font-bold'>সংশয় দূর হোক</h4>
                            <p>মো. মিকাইল আহমেদ</p>
                            <button className='bg-green-100 px-2 rounded-md'>unpaid</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-4 border bg-white mt-2 ml-2 p-4 rounded-md shadow-md'>
                        <div>
                            <img className='h-16' src={bookimg} alt="" />
                        </div>
                        <div>
                            <h4 className='font-bold'>সংশয় দূর হোক</h4>
                            <p>মো. মিকাইল আহমেদ</p>
                            <button className='bg-green-600 px-2 rounded-md'>paid</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderBook;