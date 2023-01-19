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
                                <label className='label'>
                                    <span className='label-text'>Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type='name'
                                    placeholder='Enter Name'
                                    className='input input-bordered input-primary w-full max-w-xs'
                                />
                            </div>
                            <div className='flex justify-center mb-2 '>
                                <label className='label'>
                                    <span className='label-email'>Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type='email'
                                    placeholder='Enter Email'
                                    className='input input-bordered input-primary w-full max-w-xs'
                                />
                            </div>


                            <div className='flex justify-center mb-2'>
                                <label className='label'>
                                    <span className='label-text'>Address</span>
                                </label>
                                <input
                                    {...register("address", { required: true })}
                                    type='text'
                                    placeholder='Enter Adress'
                                    className='input input-bordered input-primary w-full max-w-xs mr-2'
                                />
                            </div>

                            <div className='flex justify-center'>
                                <label className='label'>
                                    <span className='label-text'>Phone</span>
                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    type='number'
                                    placeholder='Enter Phone Number'
                                    className='input input-bordered input-primary w-full max-w-xs'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='form-control mt-6'>
                        <button className='btn btn-primary'>UPLOAD</button>
                    </div>
                </form>
            </div>
    );
};

export default UpdateProfile;