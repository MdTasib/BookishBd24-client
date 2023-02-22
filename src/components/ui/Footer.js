import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import WhatsApp from "../../pages/whatsapp/WhatsApp";

const Footer = () => {
	return (
		<div className='bg-accent h-1/2 w-full flex md:flex-row flex-col justify-around items-start px-10 py-4 block relative bottom-0'>
			<div className='p-5 '>
				<ul>
					<p className='font-bold text-2xl pb-4'>
						BookishBD<span className='text-primary'>24</span>
					</p>
					<div className='flex gap-6 pb-5'>
						<FaFacebook className='text-xl cursor-pointer hover:text-blue-600' />
						<FaInstagram className='text-xl cursor-pointer hover:text-purple-600' />
						<FaTwitter className='text-xl cursor-pointer hover:text-blue-600' />
						<FaYoutube className='text-xl cursor-pointer hover:text-red-600' />
					</div>
				</ul>
			</div>
			<div className='p-5'>
				<ul>
					<p className='font-bold text-1xl pb-2'>প্রয়োজনীয় লিংক</p>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
						<a href="/contact">যোগাযোগ করুন</a> 
					</li>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
						<a href="/about-us">আমাদের সম্পর্কে জানুন</a>
					</li>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
						ব্লগ
					</li>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
						প্রশ্নোত্তর
					</li>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
					<a href="/refund">রিফান্ড নীতিমালা</a>
					</li>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
						<a href="/condition">শর্তাবলী</a>
					</li>
				</ul>
			</div>
			<div className='p-5'>
				<ul>
					<p className='font-bold text-1xl pb-2'>জনপ্রিয়</p>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
						আপনার পছন্দের তালিকা
					</li>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
						প্যাকেজ
					</li>
					<li className='text-sm pb-2 hover:underline  text-gray-700 hover:text-black cursor-pointer'>
						জেনারেল ও অ্যাকাডেমিক বই
					</li>
				</ul>
			</div>
			<div className='p-5'>
				<ul>
					<p className='font-bold text-1xl pb-2'>যোগাযোগ</p>
					<li className='text-sm pb-2 flex items-center'>
						<GrLocation className='mr-1' /> Head Office: Your office location
						here
					</li>
					<li className='text-sm pb-2 flex items-center'>
						<BiPhoneCall className='mr-1' /> +8801518477021
					</li>
					<li className='text-sm pb-2 flex items-center'>
						<TfiEmail className='mr-1' /> mohammadtasib3@gmail.com
					</li>
				</ul>
			</div>
			<WhatsApp />
		</div>
	);
};

export default Footer;
