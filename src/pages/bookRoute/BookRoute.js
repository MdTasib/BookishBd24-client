import React from 'react';
import Book from '../../components/SectionBooks/Book';
import Container from '../../components/ui/Container';
import { products } from '../../data/data';
import SidebarFilter from './SidebarFilter';

const BookRoute = () => {
    return (
        <Container>
            <div>
                <h1 className='text-2xl'>বই</h1>
            </div>
            <section className='flex'>
                <div className='w-[300px] mr-3 hidden lg:block'>
                    <SidebarFilter />
                </div>

                <div className=' w-full md:w-[82%] mx-auto grid md:grid-cols-4 gap-y-4'>
                {products?.map(item => (
						<Book key={item.id} item={item} />
					))}
                </div>
            </section>
        </Container>
    );
};

export default BookRoute;