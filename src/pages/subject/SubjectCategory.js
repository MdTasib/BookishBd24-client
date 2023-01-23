import React from 'react';
import back_img from '../../assets/images/custom-category.png'


const SubjectCategory = ({ item: { name } }) => {

 return (
        <div>
            <div class="relative bg-no-repeat">
           <img src={back_img} class="h-56 hover:opacity-0" alt="Louvre" />
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden rounded transition duration-300 ease-in-out hover:bg-primary">
        <h1 className='flex items-center justify-center mt-24 text-white text-xl hover:opacity-60'>{name}</h1>
      </div>
    </div>
    </div>
    );
};

export default SubjectCategory;