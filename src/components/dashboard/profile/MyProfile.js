import React from 'react';

const MyProfile = () => {
	const onSubmit = async data => {
    
        const uploadProfile = {
                name: data.name,
                email:data.email,
                address:data.address,
                mobile:data.mobile,
        };
        console.log(uploadProfile);
        reset()
    }
         
    return (
      <div className="hero min-h-screen">
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
												{...register("imageURL", { required: true })}
												id='dropzone-file'
												type='file'
												className='hidden'
											/>
										</label>
        <div className="form-control">
        <label className='label'>
												<span className='label-text'>Your Name</span>
											</label>
											<input
												{...register("name", { required: true })}
												type='text'
												placeholder='Enter Your Name'
												className='input input-bordered input-primary w-full '
											/>
        </div>
        <div className="form-control">
        <label className='label'>
												<span className='label-text'>Your Email</span>
											</label>
											<input
												{...register("email", { required: true })}
												type='email'
												placeholder='Enter Your Email'
												className='input input-bordered input-primary w-full '
											/>
        </div>
        <div className="form-control">
        <label className='label'>
												<span className='label-text'>Your Address</span>
											</label>
											<input
												{...register("address", { required: true })}
												type='text'
												placeholder='Enter Your Address'
												className='input input-bordered input-primary w-full '
											/>
        </div>
        <div className="form-control">
        <label className='label'>
												<span className='label-text'>Your Mobile</span>
											</label>
											<input
												{...register("mobile", { required: true })}
												type='number'
												placeholder='Enter Your Mobile'
												className='input input-bordered input-primary w-full '
											/>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Upload</button>
        </div>
      </form>
    </div>
</div>
    );
};

export default MyProfile;