import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

const UpdateProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div className='card shadow-2xl bg-base-100 w-[50%] mx-auto'>
            {/* React-Helmet Start */}
            <Helmet>
				<meta charSet="utf-8"/>
				<title>UpdateProfile | BookishBD24</title>
				<meta name="description" content="BookishBD24 website using React JS"/>
			</Helmet>
            {/* React-Helmet End */}
            <form onSubmit={handleSubmit()} className='card-body'>
                <div className='form-control'>
                    <div className=''>
                        <h4 className="text-xl font-bold text-gray-800 mb-5 ml-5">Update Your Profile</h4>
                    </div>
                    <div className='lg:flex md:flex justify-evenly'>

                        <div>
                            <div className="avatar">
                                <div className="w-24 h-24 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='bg-primary px-2 rounded py-1 text-white mt-2 mb-3'>
                                <input type="file" name="upload-image" id="upload-image" className='sr-only' />
                                <label for="upload-image">Upload Photo</label>
                            </div>
                        </div>
                        <div>
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
                                <input className='bg-primary py-2 rounded-lg text-white w-full max-w-xs' type="submit" value="UPDATE" />
                                {/* <button className='btn btn-primary'>UPLOAD</button> */}
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UpdateProfile;