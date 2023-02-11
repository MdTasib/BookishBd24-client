import React from "react";
import hello from "../../assets/images/hello.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DashboardIntro = () => {
	const [user] = useAuthState(auth);
	return (
		<div className='text-center justify-center h-full mt-5'>
			<div className='avatar mx-auto flex-col items-center gap-3'>
				<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
					<img
						src={user?.photoURL}
						alt={user?.displayName}
					/>
				</div>
				<h2 className='text-2xl font-bold'>হ্যালো</h2>
				<h2 className='text-2xl font-bold mb-5 bg-white px-4 shadow-md rounded-md'>{user?.displayName}</h2>
			</div>
			<div data-aos='fade-right'
				data-aos-easing='ease-out-cubic'
				data-aos-duration='1000'>
				<h2 className='text-4xl text-primary font-bold px-4 py-2 shadow-md inline rounded-md'>ড্যাশবোর্ড এ আপনাকে স্বাগতম</h2>
			</div>
		</div>
	);
};

export default DashboardIntro;
