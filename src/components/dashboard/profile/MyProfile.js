import React from 'react';
import { useNavigate } from 'react-router-dom';
import bookimg from "../../../assets/images/book.png";
import { FaRegEdit } from "react-icons/fa";
import { Helmet } from 'react-helmet';



const MyProfile = () => {
    const navigate = useNavigate();

    const updateUserProfile = () => {
        navigate("/dashboard/updateprofile")
    }

    return (
        <div className='h-[100vh]'>
			{/* React-Helmet Start */}
            <Helmet>
				<meta charSet="utf-8"/>
				<title>UpdateProfile | BookishBD24</title>
				<meta name="description" content="BookishBD24 website using React JS"/>
			</Helmet>
            {/* React-Helmet End */}
            <div>
                <div className='w-[70%] mx-auto'>
                    <div className='shadow-md rounded-md mt-12 py-4 px-4 lg:px-12 md:px-12'>
                        <div className='flex justify-between'>
                            <h2 className='mb-5 text-xl font-bold'>My Profile</h2>
                            <div onClick={() => updateUserProfile()}  className='flex items-center text-primary font-bold'>
                                <FaRegEdit />
                                <p className='ml-1'>Edit</p>
                            </div>
                        </div>
                        <div className='lg:flex md:flex gap-8 '>
                            <div className=''>
                                <img className='h-24 w-24 rounded-full' src={bookimg} alt="" />
                                <button onClick={() => updateUserProfile()} className='px-2 py-2 bg-primary rounded-md text-white mt-4'>Edit profile</button>
                            </div>
                            <div className='mt-2 lg:ml-8 md:ml-8 font-bold'>
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