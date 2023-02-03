import React from 'react';
import Container from '../../../components/ui/Container';
import Loading from '../../../components/ui/Loading';
import Carousel from "react-multi-carousel";
import { useGetAuthorsQuery } from '../../../features/api/apiSlice';
import Authors from '../Authors';

const PopularAuthor = () => {
    const { data: authors,
        isLoading,
        isError,
        error, } = useGetAuthorsQuery();

    let content = null;
    if (isLoading) {
        content = <Loading />;
    }
    if (!isLoading && isError) {
        content = <p className='text-red-500'>{error}</p>;
    }
    if (!isLoading && !isError && authors?.data?.authors?.length === 0) {
        content = <p className='text-red-500'>authors not found!</p>;
    }
    if (!isError && !isLoading && authors?.data?.authors?.length > 0) {
        content = authors?.data?.authors?.map(author => (
            <Authors key={author._id} author={author} />
        ));
    }

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1560 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 1560, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 780 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 780, min: 0 },
            items: 1,
        },
    };


    return (
        <section className='pb-10'>
            <Container>
                <div data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='shadow shadow-primary border-primary border p-3 mb-4'>
                    <h2 className='text-primary font-medium'>জনপ্রিয় লেখকগণ</h2>
                </div>
                <Carousel className='shadow-xl py-4' responsive={responsive}>{content}</Carousel>
            </Container>
        </section>
    );
};

export default PopularAuthor;