import { Tooltip } from '@material-tailwind/react';
import React from 'react';
import publisher from '../../assets/images/publisher.png'

const AllPublisher = ({ book: { publication } }) => {
    return (
        <div>
          
          <div className='my-10'>
      <Tooltip className='center text-green-900 bg-gray-300'
      content={publication}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
            <img className='hover:scale-90 transform transition-all justify-center align-center mx-auto' src={publisher} alt=''>
            </img>
            
    </Tooltip>
    <h1 className='text-center mt-3 text-green-900 text-bold'>{publication}</h1>
  </div>


          {/* <div class="space-x-2 space-y-2 my-8">
            <div class="justify-center align-center mx-auto relative before:z-10 before:absolute before:left-0.5 before:-top-0 before:w-max before:max-w-xs before:-translate-x-3 before:-translate-y-full before:rounded-lg before:bg-gray-500 before:px-2 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-0 after:h-0 after:w-0 after:-translate-x-24 after:border-8 after:border-t-gray-500 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip={author}>
            <img className='hover:border-gray-900 hover:scale-90 transform transition-all justify-center align-center mx-auto' src={publisher} alt=''>
            </img>
            <h1 className='text-center text-gray-500 mt-2'>{author}</h1>
        </div>
      </div> */}

  
   </div>
    );
};

export default AllPublisher;