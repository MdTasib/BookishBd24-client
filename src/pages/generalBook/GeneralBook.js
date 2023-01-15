import React from 'react';
import Container from '../../components/ui/Container';
import Slider from '../../components/Slider/Slider';
import { products } from '../../data/data';
import Book from '../../components/SectionBooks/Book';

const GeneralBook = () => {
    return (
        <Container>
            <div>
                <Slider />
            </div>
            <div>
                <div className='shadow shadow-gray-400 border-gray-400 border p-3 mb-4'>
                    <h2 className='text-red-400 font-medium'>ভর্তি গাইড</h2>
                </div>
            </div>

            <div className=' w-full md:w-[82%] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-4 mb-5'>
                {products?.map(item => (
						<Book key={item.id} item={item} />
					))}
                </div>
        </Container>
    );
};

export default GeneralBook;