import React from 'react';
import Container from '../../components/ui/Container';
import Slider from '../../components/Slider/Slider';
import books from '../../assets/images/book.png';
import cart from "../../assets/images/icon10.png";

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
        </Container>
    );
};

export default GeneralBook;