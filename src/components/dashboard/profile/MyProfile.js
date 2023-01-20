import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import bookimg from "../../../assets/images/book.png";


const MyProfile = () => {
    const navigate = useNavigate();

const updateUserProfile = () => {
    navigate("/dashboard/updateprofile")
}

    return (
        <div className='bg-[#F3F6FC]  h-[100vh]'>
            <div className='flex justify-center'>
                <div className='bg-white p-8 rounded-md shadow-md mt-12'>
                    <div className=''>
                        <img className='h-16 w-16 rounded-full' src={bookimg} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h4 className='font-bold mb-2'>Name: Ridima Rahman Mou</h4>
                        <p className='mb-2'><span className='font-bold'>Email:</span> ridimarahmanmou5804@gmail.com</p>
                        <p className='mb-2'><span className='font-bold'>Address:</span> Birgonj, Dinajpur</p>
                        <p className='mb-2'><span className='font-bold'>Phone No:</span> 01784056495</p>
                        <button onClick={()=>updateUserProfile()} className='px-2 bg-green-700 rounded-md text-white'>update profile</button>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
};

export default MyProfile;