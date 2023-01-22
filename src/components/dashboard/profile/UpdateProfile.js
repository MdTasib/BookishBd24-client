import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div className='card w-full shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit()} className='card-body'>
                <div className='form-control'>
                    <h4 className="text-xl font-bold text-gray-800 text-center">Update Your Profile</h4>
                    <div className=''>


                        <div className="w-full flex justify-center mb-2">
                            <input
                                {...register("name", { required: true })}
                                type='name'
                                placeholder='Enter Name'
                                className='input input-bordered input-primary w-full max-w-xs'
                            />
                        </div>
                        <div className='flex justify-center mb-2 '>
                            <input
                                {...register("email", { required: true })}
                                type='email'
                                placeholder='Enter Email'
                                className='input input-bordered input-primary w-full max-w-xs'
                            />
                        </div>


                        <div className='flex justify-center mb-2'>
                            <input
                                {...register("address", { required: true })}
                                type='text'
                                placeholder='Enter Adress'
                                className='input input-bordered input-primary w-full max-w-xs'
                            />
                        </div>

                        <div className='flex justify-center'>
                            <input
                                {...register("price", { required: true })}
                                type='number'
                                placeholder='Enter Phone Number'
                                className='input input-bordered input-primary w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control mt-6'>
                            <input className='bg-primary py-2 rounded-lg text-white w-full max-w-xs sm:ml-[370px] lg:ml-[370px] md:ml-[370px]' type="submit" value="UPLOAD" />
                            {/* <button className='btn btn-primary'>UPLOAD</button> */}
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UpdateProfile;