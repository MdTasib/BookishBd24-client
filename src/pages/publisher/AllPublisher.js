import React from 'react';
import publisher from '../../assets/images/publisher.png'

const AllPublisher = ({ item: { author } }) => {
    return (
        <div>
          

          <div class="space-x-3 space-y-3 my-8">
            <div class="relative before:z-10 before:absolute before:left-0.5 before:-top-0 before:w-max before:max-w-xs before:-translate-x-3 before:-translate-y-full before:rounded-lg before:bg-gray-500 before:px-2 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-0 after:h-0 after:w-0 after:-translate-x-16 after:border-8 after:border-t-gray-500 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip={author}>
            <img src={publisher} alt=''>
            </img>
        </div>
      </div>

       </div>
    );
};

export default AllPublisher;