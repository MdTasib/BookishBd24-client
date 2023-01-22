import React from 'react';
import Container from '../../components/ui/Container';
import reviewPage from "../../assets/images/book-library.jpg2.jpg"
import bossimg from "../../assets/images/boss.png"

const UserReview = () => {
    return (
        <Container>
            <div>
                <img className='w-full h-[250px]' src={reviewPage} alt="" />
                <h3 className='text-2xl mt-2 mb-4'>বুকিশওয়ার্ড২৪ সম্পর্কে ক্রেতাদের মতামত:</h3>
            </div>
            <div className='lg:grid md:grid grid-cols-3 gap-8 mb-5'>
                <div className='shadow-xl p-4 rounded-md'>
                    <div className='flex items-center gap-4'>
                        <img
                            class='w-24 border-primary border border-3 h-24 mb-3 rounded-full shadow-lg'
                            src={bossimg}
                            alt=''
                        />
                        <div>
                            <h3 className='font-bold'>ঝংকার মাহবুব</h3>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>আক্ষরিক ভাবে বলতে গেলে সৃজনশীল কোনকিছু লেখেন যিনি তাকেই লেখক
                            বলা যায়। কিন্তু ‘লেখক’ শব্দটির ব্যাপ্তি আসলে এতোটুকুতেই সীমাবদ্ধ নয়। লেখক এই বাস্তবিক জগতের সমান্তরালে একটি কাল্পনিক পৃথিবী তৈরির ক্ষমতা রাখেন।</p>
                    </div>
                </div>
                <div className='shadow-xl p-4 rounded-md'>
                    <div className='flex items-center gap-4'>
                        <img
                            class='w-24 border-primary border border-3 h-24 mb-3 rounded-full shadow-lg'
                            src={bossimg}
                            alt=''
                        />
                        <div>
                            <h3 className='font-bold'>ঝংকার মাহবুব</h3>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>আক্ষরিক ভাবে বলতে গেলে সৃজনশীল কোনকিছু লেখেন যিনি তাকেই লেখক
                            বলা যায়। কিন্তু ‘লেখক’ শব্দটির ব্যাপ্তি আসলে এতোটুকুতেই সীমাবদ্ধ নয়। লেখক এই বাস্তবিক জগতের সমান্তরালে একটি কাল্পনিক পৃথিবী তৈরির ক্ষমতা রাখেন।</p>
                    </div>
                </div>
                <div className='shadow-xl p-4 rounded-md'>
                    <div className='flex items-center gap-4'>
                        <img
                            class='w-24 border-primary border border-3 h-24 mb-3 rounded-full shadow-lg'
                            src={bossimg}
                            alt=''
                        />
                        <div>
                            <h3 className='font-bold'>ঝংকার মাহবুব</h3>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>আক্ষরিক ভাবে বলতে গেলে সৃজনশীল কোনকিছু লেখেন যিনি তাকেই লেখক
                            বলা যায়। কিন্তু ‘লেখক’ শব্দটির ব্যাপ্তি আসলে এতোটুকুতেই সীমাবদ্ধ নয়। লেখক এই বাস্তবিক জগতের সমান্তরালে একটি কাল্পনিক পৃথিবী তৈরির ক্ষমতা রাখেন।</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UserReview;