import React from 'react';
import { FaHome } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';
import Container from '../../components/ui/Container';
import bg_img from '../../assets/images/allcategory.png'
import SubjectCategory from './SubjectCategory';
import { products } from '../../data/data';


const Subject = () => {
    return (
        <div className=''>
          <Container>

           <section className='flex my-5'>
            <FaHome className='hover:cursor-pointer'/>
            <RiArrowRightSLine className='mx-1 mt-0.5'/>
            <button>বই</button>
            <RiArrowRightSLine className='mx-1 mt-0.5'/>
            <h1>বিষয়</h1>
           </section> 

           <div>
            <img className='w-full' src={bg_img} alt=''></img>
            <p className='my-7 text-xl text-gray-500'>লক্ষাধিক বইয়ের সংগ্রহ রকমারি ডট কমে। বইয়ের এই বিশাল সমুদ্র-মন্থনে পাঠকের সুবিধার্থে প্রায় ৫০ টির মতো ক্যাটাগরি ও সহস্রাধিক বিষয়ভিত্তিক ক্যাটাগরি রয়েছে রকমারি ডট কমে। যার ফলে খুব সহজেই পাঠক তার পছন্দের ক্যাটাগরি বেছে নিয়ে নির্দিষ্ট বিষয়ভিত্তিক বইগুলো খুঁজে পাবে খুব সহজেই। রকমারি ডট কমের এই বিশাল বইয়ের সমুদ্রে জ্ঞানের জাহাজের নাবিক হতে আপনাকে নিমন্ত্রণ। মানচিত্রটা ধরা আছে নিচেই...</p>
           </div>

           <hr className='text-black border'/>
           <section className='flex justify-center items-center my-5'>
            <div className='mr-8'>
               <h1 className='text-xl text-gray-700'>Search your favorite category</h1>
            </div>

            <div className='flex items-center justify-center'>
						<div className='flex border border-primary border-2'>
							<input
								type='text'
								className='px-4 py-2 input-sm w-24 md:w-80 input-gray text-base'
								placeholder='Enter your keyword'
							/>
							<button className='flex items-center justify-center px-4 bg-primary'>
								<svg
									class='w-6 h-6 text-white'
									fill='currentColor'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'>
									<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
								</svg>
							</button>
						</div>
					</div>
        </section>
           <hr  className='text-black border'/>
          
      
           <div className='grid md:grid-cols-2 lg:grid-cols-4 mb-5 mt-8 gap-4 h-96 border md:mb-96 lg:mb-28'>
                    {products?.map(item => (
                        <SubjectCategory key={item.id} item={item} />
                    ))}

            </div>
            
          </Container>    
        </div>
    );
};

export default Subject;