import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import instagramIcon from "../../assets/icons/instagram.png";
import Button from "../../components/ui/Button";
import Loading from "../../components/ui/Loading";
import showIcon from "../../assets/icons/show.png";
import hideIcon from "../../assets/icons/hide.png";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
	const [passwordShow, setPasswordShow] = useState(false);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth);
	const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
	const location = useLocation();
	const navigate = useNavigate();

	let from = location.state?.from?.pathname || "/";

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// register from submit handler
	const onSubmit = async data => {
		await createUserWithEmailAndPassword(data?.email, data?.password);
		await updateProfile({ displayName: data.name });

		reset();
	};

	// loading spinner
	if (loading || googleLoading || updating) {
		return <Loading />;
	}

	// error message
	let errorSingup;
	if (error) {
		errorSingup = (
			<p className='text-red-500 pb-2 text-xl font-bold text-center'>
				{googleError?.message.split(":")[1] ||
					error?.message.split(":")[1] ||
					error?.updateProfileError.split(":")[1] ||
					error?.updateProfileError.split(":")[1]}
			</p>
		);
	}

	if (user || googleUser) {
		console.log(user);
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "User register successfull",
			showConfirmButton: false,
			timer: 2000,
		});

		navigate(from, { replace: true });
	}

	return (
		<div>
			<div class='relative flex '>
				<div class='flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white'>
					<div class='sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-primary text-white bg-no-repeat bg-cover relative'>
						<div class='absolute bg-gradient-to-b from-primary to-accent opacity-75 inset-0 z-0'></div>
						<div class='w-full  max-w-md z-10'>
							<div class='sm:text-xl xl:text-2xl font-bold leading-tight mb-6'>
								বাংলাদেশের যেকোনো প্রান্তে বই পৌঁছে যাবে আপনার ঠিকানায় 😍
							</div>
							<div class='sm:text-sm xl:text-md text-gray-200 font-normal'>
								{" "}
								জন্মদিন, বিবাহ, যে কোন অনুষ্ঠানে BookiesBD আপনার পাশে। পছন্দের
								মানুষকে গিফ্ট করতে পছন্দের বই সিলেক্ট করুন।
							</div>
						</div>
					</div>
					<div class='md:flex md:items-center md:justify-center w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white'>
						<div class='max-w-md w-full space-y-8'>
							<div class='text-center'>
								<h2 class='mt-6 text-3xl font-bold text-gray-900'>রেজিস্টার</h2>
								<p class='mt-2 text-sm text-gray-500'>
									আপনার ফেসবুক বা গুগল অ্যাকাউন্ট দিয়ে সহজেই রেজিস্টার করুন
								</p>
							</div>
							<div class='flex flex-row justify-center items-center space-x-3'>
								<img
									onClick={() => signInWithGoogle()}
									class='cursor-pointer h-8 px-2'
									src={googleIcon}
									alt='Google login'
								/>
								<img
									class='cursor-pointer h-8 px-2'
									src={facebookIcon}
									alt='facebook login'
								/>
								<img
									src={instagramIcon}
									alt='cursor-pointer instagram login'
									class='h-8 px-2'
								/>
							</div>
							<div class='flex items-center justify-center space-x-2'>
								<span class='h-px w-24 bg-gray-200'></span>
								<span class='text-gray-300 font-normal'>অথবা</span>
								<span class='h-px w-24 bg-gray-200'></span>
							</div>
							<form class='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
								<div class='mt-8 content-center'>
									<label
										class='ml-3 text-sm font-bold text-gray-700 tracking-wide'
										htmlFor='name'>
										নাম <span className='text-red-500'>*</span>
									</label>
									<input
										{...register("name")}
										id='name'
										class='w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-primary'
										type='text'
										placeholder='আপনার নাম'
										required
									/>
								</div>
								<div class='mt-8 content-center'>
									<label
										class='ml-3 text-sm font-bold text-gray-700 tracking-wide'
										htmlFor='number'>
										ফোন নাম্বার <span className='text-red-500'>*</span>
									</label>
									<input
										{...register("number")}
										id='number'
										class='w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-primary'
										type='phone'
										placeholder='আপনার ফোন নাম্বার'
										required
									/>
								</div>
								<div class='relative'>
									<div class='absolute right-3 mt-8'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											class='h-6 w-6 text-green-500'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
										</svg>
									</div>
									<label
										class='ml-3 text-sm font-bold text-gray-700 tracking-wide'
										htmlFor='email'>
										ইমেইল <span className='text-red-500'>*</span>
									</label>
									<input
										{...register("email", {
											required: {
												value: true,
												message: "Email is Required",
											},
											pattern: {
												value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
												message: "Provide a valid email",
											},
										})}
										id='email'
										class=' w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-primary'
										type='email'
										placeholder='আপনার ইমেইল'
										required
									/>
									<label className='label'>
										{errors.email?.type === "required" && (
											<span className='label-text-alt text-red-500'>
												{errors.email.message}
											</span>
										)}
										{errors.email?.type === "pattern" && (
											<span className='label-text-alt text-red-500'>
												{errors.email.message}
											</span>
										)}
									</label>
								</div>
								<div class='relative'>
									<div class='absolute right-3 mt-8'>
										<img
											onClick={() => setPasswordShow(!passwordShow)}
											src={passwordShow ? showIcon : hideIcon}
											alt=''
											className='h-5 w-5 cursor-pointer'
										/>
									</div>
									<label
										class='ml-3 text-sm font-bold text-gray-700 tracking-wide'
										htmlFor='password'>
										পাসওয়ার্ড <span className='text-red-500'>*</span>
									</label>
									<input
										{...register("password", {
											required: {
												value: true,
												message: "Password is Required",
											},
											minLength: {
												value: 6,
												message: "Must be 6 characters or longer",
											},
										})}
										id='password'
										class=' w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-primary'
										type={passwordShow ? "text" : "password"}
										placeholder='আপনার পাসওয়ার্ড'
										required
									/>
									<label className='label'>
										{errors.password?.type === "required" && (
											<span className='label-text-alt text-red-500'>
												{errors.password.message}
											</span>
										)}
										{errors.password?.type === "minLength" && (
											<span className='label-text-alt text-red-500'>
												{errors.password.message}
											</span>
										)}
									</label>
								</div>

								{/* display error */}
								{errorSingup}

								<div>
									<Button classes='w-full'>রেজিস্টার</Button>
								</div>
								<p class='flex flex-col items-center justify-center mt-10 text-center text-gray-500 text-sm'>
									<span>আগের অ্যাকাউন্ট আছে?</span>
									<Link
										to='/login'
										class='text-primary font-bold no-underline hover:underline cursor-pointer transition ease-in duration-300 text-sm'>
										লগইন
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
