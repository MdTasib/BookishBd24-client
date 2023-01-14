import React from 'react';
import ReviewForm from './ReviewForm';

const Review = () => {
    return (
        <div className='mt-8'>
            <div>
                <h3 className='text-gray-600 font-bold mb-5'>1 রিভিউ এবং রেটিং - সংশয় দূর হোক</h3>
                <div className='md:grid grid-cols-2 gap-4 text-center'>

                    <div className='border border-gray-400 rounded flex justify-center items-center h-[130px]'>
                        <div>
                            <h1 className='text-2xl text-gray-800 font-bold'> 5.0</h1>
                            <p className='text-gray-800'>Based on 1 review</p>
                        </div>
                    </div>

                    <div className='border border-gray-400 rounded mt-4 md:mt-0 mb-4 md:mb-4 h-[130px] pt-2 pb-2'>
                        <div className='grid grid-cols-3 gap-4'>
                            <p>5 star</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                            <p>100 %</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <p>4 star</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                            <p>0 %</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <p>3 star</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                            <p>0 %</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <p>2 star</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </div>
                            <p>0 %</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <p>1 star</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                            <p>0 %</p>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewForm />
        </div>
    );
};

export default Review;