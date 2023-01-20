import React from 'react';
import publisher from '../../assets/images/publisher.png'

const AllPublisher = ({ item: { author } }) => {
    return (
        <div>
          <div className=' cursor-pointer'>
            <img className='justify-center mx-auto' src={publisher} alt=''></img>
            <h1 className='text-center'>{author}</h1>
          </div>  
        </div>
    );
};

export default AllPublisher;