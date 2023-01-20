import React from 'react';
import back_img from '../../assets/images/custom-category.png'

// hover:bg-green-900 hover:z-10
// style={{backgroundImage: `url(${back_img})`,backgroundRepeat:"no-repeat", height:"150px", width:"200px",}}


const SubjectCategory = ({ item: { name } }) => {
 
    // const cardStyle ={
    // bookImage:{
    //   position: "absolute"
    // },
    // book:{
    //     backgroundColor: "DodgerBlue",
    //     position: "relative",
    //     marginTop : "-50px"
    //  }    
    // }
   
    return (
        <div>
            {/* <div class="relative bg-no-repeat">
           <img src={back_img} class="h-56 max-w-xs hover:opacity-0" alt="Louvre" />
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-50 transition duration-300 ease-in-out hover:bg-primary"></div>
    </div> */}


              <div className=' hover:bg-red-400 rounded' >
              <img className='h-56 'src={back_img} alt=''/>
              <div className=''>
                 <h1 className='flex items-center justify-center'>{name}</h1>
                 </div> 
             </div>

     </div>
    );
};

export default SubjectCategory;