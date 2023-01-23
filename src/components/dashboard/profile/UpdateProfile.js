import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div className='card shadow-2xl bg-base-100 w-[50%] mx-auto'>
            <form onSubmit={handleSubmit()} className='card-body'>
                <div className='form-control'>
                    <div className='flex justify-between'>
                        <h4 className="text-xl font-bold text-gray-800 mb-5">Update Your Profile</h4>
                    </div>
                    <div className=''>

                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <input
                                {...register("name", { required: true })}
                                type='name'
                                placeholder='Enter Name'
                                className='input input-bordered input-primary w-full max-w-xs'
                            />
                        </div>
                        <div className='mb-2 '>
                            <input
                                {...register("email", { required: true })}
                                type='email'
                                placeholder='Enter Email'
                                className='input input-bordered input-primary w-full max-w-xs'
                            />
                        </div>

                        <div className=''>
                            <input
                                {...register("price", { required: true })}
                                type='number'
                                placeholder='Enter Phone Number'
                                className='input input-bordered input-primary w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control mt-6'>
                            <input className='bg-primary py-2 rounded-lg text-white w-full max-w-xs' type="submit" value="UPLOAD" />
                            {/* <button className='btn btn-primary'>UPLOAD</button> */}
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UpdateProfile;