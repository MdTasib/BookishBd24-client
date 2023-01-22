import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div>
            <h1 className='text-2xl text-center'>BookishBD24 সম্পর্কে আপনার মতামত লিখুন</h1>
            <div className='hero'>
                <div className='hero-content w-full'>
                    <div className='card w-full shadow-2xl bg-base-100'>
                        <form onSubmit={handleSubmit()} className='card-body'>
                            <div className='form-control'>
                                <div className=''>
                                    <div>
                                        <label className='label'>
                                            <span className='label-text'>Upload Image</span>
                                        </label>

                                        <div className='flex justify-center items-center w-full'>
                                            <label
                                                for='dropzone-file'
                                                className='flex flex-col justify-center items-center w-full bg-accent rounded-lg border-2 border-primary border-dashed cursor-pointer'>
                                                <div className='flex flex-col justify-center items-center pt-5 pb-6'>
                                                    <svg
                                                        className='mb-3 w-5 h-5 text-primary'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth='2'
                                                            d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
                                                    </svg>
                                                    <p className='mb-2 text-sm text-gray-500 dark:text-primary'>
                                                        <span className='font-semibold'>
                                                            Click to upload image
                                                        </span>
                                                    </p>
                                                </div>
                                                <input
                                                    {...register("image", { required: true })}
                                                    id='dropzone-file'
                                                    type='file'
                                                    className='hidden w-full'
                                                />
                                            </label>
                                        </div>
                                        <label className='label'>
                                            <span className='label-text'>Upload More Images</span>
                                        </label>
                                    </div>
                                </div>
                                {/*  */}
                                <div>
                                    <label className='label'>
                                        <span className='label-text'>Name</span>
                                    </label>
                                    <input
                                        {...register("name", { required: true })}
                                        type='name'
                                        placeholder='Your Name'
                                        className='input input-bordered input-primary w-full max-w-xs'
                                    />
                                </div>
                                <div>
                                    <label className='label'>
                                        <span className='label-email'>Email</span>
                                    </label>
                                    <input
                                        {...register("email", { required: true })}
                                        type='text'
                                        placeholder='Your Email'
                                        className='input input-bordered input-primary w-full max-w-xs'
                                    />
                                </div>
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Description</span>
                                </label>
                                <textarea
                                    {...register("description", { required: true })}
                                    className='textarea textarea-primary w-full max-w-xs'
                                    placeholder='Enter Description'></textarea>
                            </div>

                            <div className='form-control mt-6'>
                                <button className='btn btn-primary'>Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;