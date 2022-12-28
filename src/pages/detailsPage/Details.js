import React from 'react';
import bookImg from '../../assets/images/book.png'
import bookImg2 from '../../assets/images/book2.png'

import addimg1 from '../../assets/images/Adds/add1.png';
import addimg2 from '../../assets/images/Adds/add2.png';
import addimg3 from '../../assets/images/Adds/add3.png';
import addimg4 from '../../assets/images/Adds/add4.png';
import Container from '../../components/ui/Container';

const Details = () => {
    return (
        <Container>
            <div className='mb-12 mt-2'>
                <div className='md:flex justify-around gap-4'>
                    <div>
                        <img className='md:h-60 md:w-64' src={bookImg} alt="" />
                    </div>
                    <div>
                        <div className='mb-3'>
                            <h2 className='text-xl'>সংশয় দূর হোক</h2>
                            <p>লেখক : <span className='text-[#F23534]'>মো. মিকাইল আহমেদ</span></p>
                            <p>প্রকাশনী : <span className='text-[#F23534]'>দুর্বার পাবলিকেশন্স</span></p>
                            <p>বিষয় : <span className='text-[#F23534]'>ইসলামি আদর্শ ও মতবাদ</span></p>
                            <small>পৃষ্ঠা : 332, কভার : হার্ড কভার, সংস্করণ : 1st Published, 2022</small>
                            <small>ভাষা : বাংলা</small>
                        </div>
                        <p className='mb-6'>আগ্রাসনমুখী পাশ্চাত্যের মুখে পৃথিবী যেমন হারিয়েছে তার নিজস্ব চোখ, তেমনি ইসলাম প্রসঙ্গে চৌদ্দশ বছর আগের যে চিত্র; দ্বিধা-সন্দেহ আর শতধা সংশয়কে একপাশে ফেলে রেখে রবের আশ্রয়ে নিজেকে সমর্পণ করে দিয়ে... আরো পড়ুন</p>
                        <h2 className='text-xl mb-3 text-[#F23534]'>525 ৳ <del className='text-gray-500'>700 ৳</del>(25% ছাড়ে)</h2>
                        <div>
                            <button className='bg-[#F23534] text-white px-4 py-2 rounded'>অর্ডার করুন</button>
                            <button className='bg-[#F29434] text-white px-4 py-2 rounded ml-3 hover:bg-[#F23534]'>আরও পড়ুন</button>
                        </div>

                        {/* ADDS IMAGES------------------------------- */}
                        <div className='mt-4 md:grid grid-cols-2 gap-y-4'>
                            <img className='w-80 h-auto mb-4 md:mb-0' src={addimg1} alt="" />
                            <img className='w-80 h-auto mb-4 md:mb-0' src={addimg2} alt="" />
                            <img className='w-80 h-auto mb-4 md:mb-0' src={addimg3} alt="" />
                            <img className='w-80 h-auto mb-4 md:mb-0' src={addimg4} alt="" />
                        </div>
                    </div>


                    <div className='border border-gray-500 pr-12 pl-2'>
                        <h2 className='border-b border-gray-500 mb-2'>আরো দেখুন…</h2>
                        <div className='flex gap-2 border-b border-gray-500'>
                            <img className='h-32' src={bookImg2} alt="" />
                            <div>
                                <h4 className='mb-2'>প্যারাডক্সিক্যাল সাজিদ</h4>
                                <small className='text-gray-700 block'>আরিফ আজাদ</small>
                                <small className='text-gray-700 block'>গার্ডিয়ান পাবলিকেশন্স</small>

                                <small><del className='text-gray-600'>275</del></small>
                                <small className='text-[#F23534] ml-4'>214</small>

                            </div>
                        </div>
                        <div className='flex gap-2 border-b border-gray-500 mt-2'>
                            <img className='h-32' src={bookImg2} alt="" />
                            <div>
                                <h4 className='mb-2'>প্যারাডক্সিক্যাল সাজিদ</h4>
                                <small className='text-gray-700 block'>আরিফ আজাদ</small>
                                <small className='text-gray-700 block'>গার্ডিয়ান পাবলিকেশন্স</small>
                                <small><del className='text-gray-600'>275</del></small>
                                <small className='text-[#F23534] ml-4'>214</small>
                            </div>
                        </div>

                        <div className='flex gap-2 mt-2'>
                            <img className='h-32' src={bookImg2} alt="" />
                            <div>
                                <h4 className='mb-2'>প্যারাডক্সিক্যাল সাজিদ</h4>
                                <small className='text-gray-700 block'>আরিফ আজাদ</small>
                                <small className='text-gray-700 block'>গার্ডিয়ান পাবলিকেশন্স</small>
                                <small><del className='text-gray-600'>275</del></small>
                                <small className='text-[#F23534] ml-4'>214</small>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    );
};

export default Details;