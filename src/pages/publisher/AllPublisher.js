import React from 'react';
import publisher from '../../assets/images/publisher.png'

const AllPublisher = ({ item: { author } }) => {
    return (
        <div>
          <div className=' cursor-pointer'>
            <img className='justify-center mx-auto transform transition-all hover:scale-90' src={publisher} alt=''></img>
            <h1 className='text-center mt-5'>{author}</h1>
          </div> 

       </div>
    );
};

export default AllPublisher;