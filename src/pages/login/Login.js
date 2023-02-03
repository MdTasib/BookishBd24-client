import { useEffect, useState } from "react";
import {
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from "firebase/auth";
import {
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import instagramIcon from "../../assets/icons/instagram.png";
import Button from "../../components/ui/Button";
import Loading from "../../components/ui/Loading";
import auth from "../../firebase.init";
import { useRef } from "react";
import toast from "react-hot-toast";

const Login = () => {
	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth);
	const emailRef = useRef("");
	const passwordRef = useRef("");
	let navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	// handle user login email and password
	const handleSubmit = async event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		await signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
				toast.success("User login successfully");

				if (user.uid) {
					navigate(from, { replace: true });
				}
			})
			.catch(error => {
				errorMessage(error);
			});
	};

	// handle forget password
	const handleForgetPassword = () => {
		const email = emailRef.current.value;
		sendPasswordResetEmail(auth, email)
			.then(() => toast.success("Please check your email and new password set"))
			.catch(error => {
				errorMessage(error);
			});
	};

	// displayed error message
	const errorMessage = error => {
		let errorMessage = error.message;
		toast.error(errorMessage.split(":")[1]);
	};

	return (
		<div>
			<div className='relative flex '>
				<div className='flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white'>
					<div
						className='sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-primary text-white bg-no-repeat bg-cover relative'
						style={{
							backgroundImage:
								"url(../../../../assets/images/book-library.jpg)",
						}}>
						<div className='absolute bg-gradient-to-b from-primary to-accent opacity-75 inset-0 z-0'></div>
						<div className='w-full  max-w-md z-10'>
							<div className='sm:text-xl xl:text-2xl font-bold leading-tight mb-6'>
								বাংলাদেশের যেকোনো প্রান্তে বই পৌঁছে যাবে আপনার ঠিকানায় 🥰
							</div>
							<div className='sm:text-sm xl:text-md text-gray-200 font-normal'>
								{" "}
								জন্মদিন, বিবাহ, যে কোন অনুষ্ঠানে BookiesBD আপনার পাশে। পছন্দের
								মানুষকে গিফ্ট করতে পছন্দের বই সিলেক্ট করুন।
							</div>
						</div>
					</div>
					<div className='md:flex md:items-center md:justify-center w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white'>
						<div className='max-w-md w-full space-y-8'>
							<div className='text-center'>
								<h2 className='mt-6 text-3xl font-bold text-gray-900'>লগইন</h2>
								<p className='mt-2 text-sm text-gray-500'>
									আপনার ফেসবুক বা গুগল অ্যাকাউন্ট দিয়ে সহজেই লগইন করুন
								</p>
							</div>
							<div className='flex flex-row justify-center items-center space-x-3'>
								<img
									className='px-2 h-8 cursor-pointer'
									src={googleIcon}
									alt='Google login'
									onClick={() => signInWithGoogle()}
								/>
								<img
									className='px-2 h-8 cursor-pointer'
									src={facebookIcon}
									alt='facebook login'
								/>
								<img
									src={instagramIcon}
									alt='instagram login'
									className='px-2 h-8 cursor-pointer'
								/>
							</div>
							<div className='flex items-center justify-center space-x-2'>
								<span className='h-px w-24 bg-gray-200'></span>
								<span className='text-gray-300 font-normal'>অথবা</span>
								<span className='h-px w-24 bg-gray-200'></span>
							</div>
							<form className='mt-8 space-y-6' onSubmit={handleSubmit}>
								<div className='relative'>
									<div className='absolute right-3 mt-8'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 text-green-500'
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
									<label className='ml-3 text-sm font-bold text-gray-700 tracking-wide'>
										ইমেইল <span className='text-red-500'>*</span>
									</label>
									<input
										required
										ref={emailRef}
										className=' w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-primary'
										type='email'
										placeholder='আপনার ইমেইল'
									/>
								</div>
								<div className='mt-8 content-center'>
									<label className='ml-3 text-sm font-bold text-gray-700 tracking-wide'>
										পাসওয়ার্ড <span className='text-red-500'>*</span>
									</label>
									<input
										ref={passwordRef}
										required
										className='w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-primary'
										type='password'
										placeholder='আপনার পাসওয়ার্ড'
									/>
								</div>
								<div className='flex items-center justify-between'>
									<div className='form-control'>
										<label className='cursor-pointer label'>
											<input
												type='checkbox'
												className='checkbox checkbox-primary mr-2'
											/>
											<span className='label-text'>Remember me</span>
										</label>
									</div>
									<div className='text-sm'>
										<p
											onClick={handleForgetPassword}
											className='text-primary font-bold hover:underline cursor-pointer'>
											আপনি কি পাসওয়ার্ড ভুলে গেছেন?
										</p>
									</div>
								</div>

								<Button classes='w-full'>লগইন</Button>
								<p className='flex flex-col items-center justify-center mt-10 text-center text-gray-500 text-sm'>
									<span>কোনো অ্যাকাউন্ট নেই?</span>
									<Link
										to='/register'
										className='text-primary font-bold no-underline hover:underline cursor-pointer transition ease-in duration-300 text-sm'>
										রেজিস্টার
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

export default Login;
