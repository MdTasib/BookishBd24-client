import React from 'react';
import Container from '../../components/ui/Container';
import book1 from "../../assets/images/book.png";
import book2 from "../../assets/images/book2.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import Checkout from './Checkout';
import { Helmet } from 'react-helmet';

const Cart = () => {
    return (

        <div className='bg-[#F1F2F4]'>
            <Helmet>
				<meta charSet="utf-8"/>
				<title>Cart | BookishBD24</title>
				<meta name="description" content="BookishBD24 website using React JS"/>
			</Helmet>
            <Container>
                <div className='md:flex lg:flex justify-between gap-6 md:px-12 lg:px-12'>
                    <div className='md:w-[82%] lg:w-[82%]'>
                        <div className='bg-[#FFFFFF] lg:flex md:flex justify-between mt-8 py-4'>
                            <div className='flex items-center md:ml-10 lg:ml-10 ml-4'>
                                <input type="checkbox" name="" id="" />
                                <p className='ml-2'>Select All (2 Items)</p>
                            </div>
                            <div className='md:mr-10 lg:mr-10 ml-4 md:ml-0 lg:ml-0'>
                                <p>Your total:<del className='text-red-700'>397 TK.</del> <span className='text-primary'>341 TK.</span></p>
                            </div>
                        </div>

                        <div className='bg-[#FFF] mt-8 mb-8'>
                            <div>
                                <div className='lg:flex md:flex items-center justify-between'>
                                    <div className='flex items-center gap-5 mt-5 mb-5 md:ml-10 lg:ml-10 ml-4 pt-5 md:pt-0 lg:pt-0'>
                                        <input type="checkbox" name="" id="" />
                                        <img className='h-[100px]' src={book1} alt="" />
                                        <div>
                                            <p>সংশয় দূর হোক</p>
                                            <p>মো. মিকাইল আহমেদ</p>
                                            <p><small>দুর্বারপাবলিকেশন্স</small></p>
                                            <RiDeleteBin6Line />
                                            <small>Only 26 copies available</small>
                                        </div>
                                    </div>
                                    <div className='border border-gray-500 inline ml-4 md:ml-0 lg:ml-0'>
                                        <button className='px-4 border-r border-gray-500 bg-gray-200'>-</button>
                                        <button className='px-4 border-r border-gray-500 bg-white'>1</button>
                                        <button className='px-4 bg-gray-200'>+</button>
                                    </div>
                                    <div className='md:mr-10 lg:mr-10 ml-4 md:ml-0 lg:ml-0'>
                                        <p>TK.50</p>
                                        <p><del className='text-red-600'>TK.67</del></p>
                                    </div>
                                </div>
                                <hr />
                                <div className='lg:flex md:flex items-center justify-between'>
                                    <div className='flex items-center gap-5 mt-5 mb-5 md:ml-10 lg:ml-10 ml-4 pt-5 md:pt-0 lg:pt-0'>
                                        <input type="checkbox" name="" id="" />
                                        <img className='h-[100px]' src={book2} alt="" />
                                        <div>
                                            <p>প্যারাডক্সিক্যাল সাজিদ</p>
                                            <p> আরিফ আজাদ</p>
                                            <p><small> গার্ডিয়ান পাবলিকেশন্স</small></p>
                                            <RiDeleteBin6Line />
                                            <small>Only 26 copies available</small>
                                        </div>
                                    </div>
                                    <div className='border border-gray-500 inline ml-4 md:ml-0 lg:ml-0'>
                                        <button className='px-4 border-r border-gray-500 bg-gray-200'>-</button>
                                        <button className='px-4 border-r border-gray-500 bg-white'>1</button>
                                        <button className='px-4 bg-gray-200'>+</button>
                                    </div>
                                    <div className='md:mr-10 lg:mr-10 ml-4 md:ml-0 lg:ml-0'>
                                        <p>TK.50</p>
                                        <p><del className='text-red-600'>TK.67</del></p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className='bg-[#FFFFFF] p-8 relative'>
                                <button className='bg-primary text-white py-2 px-6 absolute right-0 top-2 mr-5 rounded'>Place Order</button>
                            </div>
                        </div>
                    </div>



                    <div className='md:w-[300px] lg:w-[300px] mt-8 pb-4 md:pb-0 lg:pb-0'>
                        <Checkout />
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Cart;