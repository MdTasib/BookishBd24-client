import React from 'react';
import { useState } from 'react';
import { MdOutlineRateReview } from 'react-icons/md';
import SectionBooks from '../../components/SectionBooks/SectionBooks';


const ReviewForm = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className='mb-4 md:mb-4'>
            <div className='flex justify-center'>
                <button onClick={() => setOpen(true)} className='flex items-center text-red-600 hover:text-red-700'>
                    <MdOutlineRateReview />
                    <h3> আপনার রিভিউটি লিখুন</h3>
                </button>
            </div>

            {open &&
                <div>
                    <div>
                        <p className='text-sm'>Your email address will not be published. Required fields are marked</p>
                        <div>
                            <p className='text-sm'>রেটিং</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>

                        <form>
                            <label htmlFor="">রিভিউ</label>
                            <textarea className='border border-gray-400 w-full rounded' name="" id="" cols="30" rows="5"></textarea>
                            <label htmlFor="">নাম</label>
                            <br />
                            <input className='border border-gray-400 rounded' type="text" name="" id="" />
                            <br />
                            <label htmlFor="">ইমেইল</label>
                            <br />
                            <input className='border border-gray-400 rounded' type="email" name="" id="" />
                            <br />
                            <label htmlFor="">sabmit</label>
                            <br />
                            <input className='border border-gray-400 rounded px-2' type="submit" value="submit" />
                        </form>
                    </div>

                </div>
            }

            <div>
                <div>
                    <h3 className='text-red-600 p-3 border border-gray-400 mt-6 shadow-lg'>Which products are you  have seen</h3>
                </div>
                {/* <SectionBooks /> */}
            </div>

        </div>
    );
};

export default ReviewForm;