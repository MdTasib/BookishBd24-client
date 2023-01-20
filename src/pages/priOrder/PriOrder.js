import React from 'react';
import Container from '../../components/ui/Container';
import { products } from '../../data/data';
import PreOrderBook from '../preOderBook/PreOrderBook';

const PriOrder = () => {
    return (
        <div>
            <Container>
            <div className='mt-5'>
                <div className='shadow shadow-gray-400 border-gray-400 border p-3 mb-4'>
                    <h2 className='text-green-900 px-2 font-bold text-xl border border-2 border-green-900 inline'>প্রি-অর্ডার</h2>
                </div>
            </div>
            
            
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 mb-5 mt-8'>
                    {products?.map(item => (
                        <PreOrderBook key={item.id} item={item} />
                    ))}

            </div>

            </Container>

         </div>
    );
};

export default PriOrder;