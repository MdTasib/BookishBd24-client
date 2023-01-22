import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import bookimg from "../../../assets/images/book.png";
import { FaRegEdit } from "react-icons/fa";


const MyProfile = () => {
    const navigate = useNavigate();

    const updateUserProfile = () => {
        navigate("/dashboard/updateprofile")
    }

    return (
        <div className='h-[100vh]'>
            <div>
                <div className='w-[70%] mx-auto'>
                    <div className='bg-gray-200 rounded-md mt-12 py-4 px-12'>
                        <div className='flex justify-between'>
                            <h2 className='mb-5 text-xl font-bold'>My Profile</h2>
                            <div onClick={() => updateUserProfile()}  className='flex items-center text-primary font-bold'>
                                <FaRegEdit />
                                <p className='ml-1'>Edit</p>
                            </div>
                        </div>
                        <div className='flex gap-8 '>
                            <div className=''>
                                <img className='h-24 w-24 rounded-full' src={bookimg} alt="" />
                                <button onClick={() => updateUserProfile()} className='px-2 py-2 bg-primary rounded-md text-white mt-4'>Edit profile</button>
                            </div>
                            <div className='mt-2 ml-8 font-bold'>
                                <small>Name:</small>
                                <p className='mb-2'>Ridima Rahman Mou</p>
                                <small>Email:</small>
                                <p className='mb-2'>ridimarahmanmou5804@gmail.com</p>
                                <small>Address:</small>
                                <p className='mb-2'>Birgonj, Dinajpur</p>
                                <small>Phone:</small>
                                <p className='mb-2'>01784056495</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
};

export default MyProfile;