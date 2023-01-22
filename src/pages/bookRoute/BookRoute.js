import React from 'react';
import Book from '../../components/SectionBooks/Book';
import Container from '../../components/ui/Container';
import { products } from '../../data/data';
import FilterBook from './FilterBook';

const BookRoute = () => {
    return (
        <Container>
            <div>
                <h1 className='text-2xl'>বই</h1>
            </div>

            <div className='flex items-center md:ml-[950px] lg:md:ml-[950px]'>
                <div>
                    <label className='font-bold mr-2 text-gray-600' for="cars">সর্ট করুন</label>
                </div>
                <div className='inline'>
                    
                </div>
            </div>

            <section className='md:flex lg:flex'>
                <div className='w-[300px] mr-3'>
                    <FilterBook />
                </div>

                <div className=' w-full md:w-[82%] mx-auto grid md:grid-cols-4 gap-y-4 mb-5 mt-8'>
                    {products?.map(item => (
                        <Book key={item.id} item={item} />
                    ))}

                </div>
            </section>
        </Container>
    );
};

export default BookRoute;