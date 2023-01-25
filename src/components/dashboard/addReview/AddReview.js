import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
}

const AddReview = () => {
    const { register } = useForm();
    const [rating, setRating] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [comment, setComment] = useState('');
    const stars = Array(5).fill(0);

    const handleComment = (e) => {
        const limit = 120;
        //  only take 50 characters
        setComment(e.target.value.slice(0, limit));
    };
    
    const handleClick = (value) => {
      setRating(value);
    }
    const handleMouseOver = (newHoverValue) => {
      setHoverValue(newHoverValue);
    }
    
    const handleMouseLeave = () => {
      setHoverValue(undefined);
    }

    return (
        <div className='w-full p-10 lg:w-1/2 mx-auto'>
        <h1 className='text-2xl text-center text-primary'>BookishBD24 সম্পর্কে আপনার মতামত লিখুন</h1>
        <form className='card-body pb-0'>
          <div className="avatar mx-auto flex-col items-center gap-3">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={'https://i.pravatar.cc/300'} alt="images" />
            </div>
            <h2 className="text-2xl font-bold">Name</h2>
          </div>
  
        <div className="flex flex-row justify-center">
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || rating) > index ? colors.orange : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
        </div>
  
          <textarea
            {...register("review", { required: false, maxLength: 500 })}
            className="textarea textarea-primary h-40 my-3 w-full"
            value={comment}
            onChange={handleComment}
            placeholder="Please Your Feedback only take 120 characters"
          ></textarea>
          
          <input type="submit" className='btn btn-primary' value='Add Review' disabled={!rating} />
  
        </form>
      </div>
    );
};

export default AddReview;