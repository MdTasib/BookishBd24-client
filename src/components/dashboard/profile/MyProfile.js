import React from 'react';
import { useForm } from 'react-hook-form';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyProfile = () => {
    const [singleImages, setSingleImages] = useState({});
	const { register, handleSubmit, reset } = useForm();
	const [loading, setLoading] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [user] = useAuthState(auth);
	
    const handleEdit = () => {
		setIsEdit(true);
	};
	const onSubmit = async data => {
		if (singleImages.length > 1) {
			setLoading(false);
			toast.error("Max 1 images");
			return;
		}

		///////////////   single images upload   //////////////////
		// Store single images in firebase
		const storeImage = async image => {
			return new Promise((resolve, reject) => {
				const storage = getStorage();
				const fileName = `${image.name}-${uuidv4()}`;

				const storageRef = ref(storage, "images/" + fileName);

				const uploadTask = uploadBytesResumable(storageRef, image);

				uploadTask.on(
					"state_changed",
					snapshot => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						console.log("Upload is " + progress + "% done");
						switch (snapshot.state) {
							case "paused":
								console.log("Upload is paused");
								break;
							case "running":
								console.log("Upload is running");
								break;
							default:
								break;
						}
					},
					error => {
						reject(error);
					},
					() => {
						// Handle successful uploads on complete
						// For instance, get the download URL: https://firebasestorage.googleapis.com/...
						getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
							resolve(downloadURL);
						});
					}
				);
			});
		};

		const imageURLS = await Promise.all(
			[...singleImages].map(image => storeImage(image))
		).catch(() => {
			toast.error("Images not uploaded");
			return;
		});
		console.log(imageURLS);
        
        const uploadProfile = {
                name: data.name,
                email:data.email,
                address:data.address,
                mobile:data.mobile,
				image:imageURLS[0]
        };
        console.log(uploadProfile);
        reset()
    }
	if (loading) {
		return <Loading />;
	}
         
    return (
//       <div className="hero min-h-screen">
//     <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
//       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//       <label
// 			for='dropzone-file'
// 			className='flex flex-col justify-center items-center w-full bg-accent rounded-lg border-2 border-primary border-dashed cursor-pointer'>
// 		   <div className='flex flex-col justify-center items-center pt-5 pb-6'>
// 			   <svg
// 				   className='mb-3 w-5 h-5 text-primary'
// 				   fill='none'
// 				   stroke='currentColor'
// 				   viewBox='0 0 24 24'
// 				   xmlns='http://www.w3.org/2000/svg'>
// 				   <path
// 					   strokeLinecap='round'
// 					   strokeLinejoin='round'
// 					   strokeWidth='2'
// 					   d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
// 			   </svg>
// 			   <p className='mb-2 text-sm text-gray-500 dark:text-primary'>
// 				   <span className='font-semibold'>
// 					   Click to upload image
// 				   </span>
// 			   </p>
// 		   </div>
// 		   <input
// 			   {...register("imageURL", { required: true })}
// 			   id='dropzone-file'
// 			   type='file'
// 			   className='hidden'
// 			   onChange={e => setSingleImages(e.target.files)}
// 		   />
// 	   </label>					            
//         <div className="form-control">
//         <label className='label'>
// 												<span className='label-text'>Your Name</span>
// 											</label>
// 											<input
// 												{...register("name", { required: true })}
// 												type='text'
// 												placeholder='Enter Your Name'
// 												className='input input-bordered input-primary w-full '
// 											/>
//     <label className='label'>
// 												<span className='label-text'>Your Email</span>
// 											</label>
// 											<input
// 												{...register("email", { required: true })}
// 												type='email'
// 												placeholder='Enter Your Email'
// 												className='input input-bordered input-primary w-full '
// 											/>
//         </div>
//         <div className="form-control">
//         <label className='label'>
// 												<span className='label-text'>Your Address</span>
// 											</label>
// 											<input
// 												{...register("address", { required: true })}
// 												type='text'
// 												placeholder='Enter Your Address'
// 												className='input input-bordered input-primary w-full '
// 											/>
//         </div>
//         <div className="form-control">
//         <label className='label'>
// 												<span className='label-text'>Your Mobile</span>
// 											</label>
// 											<input
// 												{...register("mobile", { required: true })}
// 												type='number'
// 												placeholder='Enter Your Mobile'
// 												className='input input-bordered input-primary w-full '
// 											/>
//         </div>
        
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Upload</button>
//         </div>
//       </form>
//     </div>
// </div>
    <form
	onSubmit={handleSubmit(onSubmit)}
	className=" mt-5  flex-col flex items-center py-11"
  >
	<div className="card flex-shrink-0 shadow-2xl bg-base-100 w-3/4 lg:w-2/3 justify-center items-center">
	  <div className="flex items-center bg-slate-200 w-full">
		<div className="avatar p-5 pr-0 w-1/4">
		  <div className="mask mask-hexagon">
			<img src={user.photoURL} alt={user.displayName} />
		  </div>

		</div>
		{/* Name Section  */}
		<div>
		  <h1 className="text-xl font-bold">{user.displayName}</h1>
		  <p>{user.email}</p>
		</div>
	  </div>

	  {/* Aditional Info  */}




	  <div className="w-full flex flex-row">
		<div className=" px-10 py-5 w-5/6 lg:w-10/12">
		  {isEdit ? (

			<input
			  type="file"
			  className="input input-bordered input-secondary w-full"
			  defaultValue={user?.photoURL}
			  {...register("image")}
			/>
		  ) : (
			<div className="avatar flex items-center justify-center">
			  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
				<img src={user?.image} />
			  </div>
			</div>

		  )}
		</div>
	  </div>

	  <div className="w-full flex flex-row">
		<div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
		  <div className="font-bold">Name</div>
		</div>
		<div className=" px-10 py-5 w-5/6 lg:w-10/12">
		  {isEdit ? (
			<input
			  type="text"
			  className="input input-bordered input-secondary w-full"
			  defaultValue={user.name}
			  {...register("name", { maxLength: 20 })}
			/>
		  ) : (
			<div>{user.name}</div>

		  )}
		</div>
	  </div>

	  <div className="overflow-x-auto w-full">
		{/* <!-- row 1 --> */}
		<div className="w-full flex flex-row">
		  <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
			<div className="font-bold">Address</div>
			<div className="text-sm opacity-50">City</div>
		  </div>
		  <div className=" px-10 py-5 w-5/6 lg:w-10/12">
			{isEdit ? (
			  <input
				className="input input-bordered input-secondary w-full"
				// name="address"
				defaultValue={user.address}
				{...register("address", {
				  maxLength: 500,
				})}
			  />

			) : (

			  <div>{user?.address}</div>
			)}
			<br />

			{isEdit ? (
			  <input
				className="input input-bordered w-full mt-1"
				defaultValue={user?.city}
				{...register("city", { maxLength: 500 })}
			  />
			) : (
			  <span className="badge badge-ghost badge-sm">
				{user?.city}
			  </span>
			)}
		  </div>
		</div>
		{/* <!-- row 2 --> */}
		<div className="w-full flex flex-row">
		  <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
			<div className="font-bold">Phone</div>
		  </div>
		  <div className=" px-10 py-5 w-5/6 lg:w-10/12">
			{isEdit ? (
			  <input
				type="tel"
				className="input input-bordered input-secondary w-full"
				defaultValue={user?.phone}
				{...register("phone", { maxLength: 15 })}
			  />
			) : (
			  <div>{user?.phone}</div>

			)}
		  </div>
		</div>
		{/* <!-- row 2 --> */}
		<div className=" flex flex-row justify-evenly items-center px-5 lg:px-10 py-5">
		  <button
			className="btn btn-primary"
			disabled={isEdit}
			onClick={handleEdit}
		  >
			Edit
		  </button>
		  <input
			type="submit"
			className="btn btn-secondary"
			disabled={!isEdit}
		  />
		</div>
	  </div>
	</div>
  </form>
    );
};

export default MyProfile;