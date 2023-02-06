import React from "react";
import Container from "../../components/ui/Container";
import Slider from "infinite-react-carousel";
import { FaShoppingCart } from "react-icons/fa";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { Helmet } from "react-helmet";

const Offer = () => {
	const sliders = [
		{
			id: 1,
			image:
				"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AC%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F-%E0%A6%B8%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A7%A7%E0%A7%A6%E0%A7%A6-%E0%A6%AC%E0%A6%87_desktop-1.jpg",
		},
		{
			id: 2,
			image:
				"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8-%E0%A6%85%E0%A6%AB%E0%A6%BE%E0%A6%B0_desktop-1.jpg",
		},
	];

	const settings = {
		arrows: false,
		autoplay: true,
		dots: true,
		pauseOnHover: false,
	};

	return (
		<Container>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Offer | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
			<div className='text-sm breadcrumbs py-4'>
				<ul>
					<Breadcrumb route='/' name='হোম' />
					<Breadcrumb route='/offer' name='অফারসমূহ' />
				</ul>
			</div>
			<Slider {...settings} className='mb-10'>
				{sliders.map(slider => (
					<img
						key={slider.id}
						className='w-full h-64 object-cover'
						src={slider.image}
						alt=''
					/>
				))}
			</Slider>
			<div>
				<h1 className='text-2xl'>অতিরিক্ত ছাড়ের বইসমূহ</h1>
				<div className='lg:flex md:flex'>
					<div className='w-[300px] mr-3'>
						<img
							className='animate-pulse'
							src='https://png.pngtree.com/png-clipart/20220516/ourlarge/pngtree-obishasho-mullo-char-bangla-offer-label-png-image_4642251.png'
							alt=''
						/>
						<div className='mt-12'>
							<img
								className='animate-bounce'
								src='https://png.pngtree.com/png-vector/20221030/ourmid/pngtree-bangla-discount-tag-up-to-10-off-png-image_6403888.png'
								alt=''
							/>
						</div>
					</div>
					<div className=' w-full md:w-[82%] mx-auto grid md:grid-cols-3 gap-y-4 mb-5'>
						<div className='mx-7 max-h-min border-2 rounded hover:border-primary cursor-pointer p-2'>
							<img
								className='block mx-auto'
								src='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/270857a7a_198199.jpg'
								alt=''
							/>
							<div className='relative'>
								<a
									href='/'
									title=''
									className='crt-btn flex items-center justify-center'>
									<FaShoppingCart className='text-white' />
								</a>
							</div>
							<div className='px-4'>
								<h3 className='text-sm font-bold'>হৃদ স্পন্দন ২য় খণ্ড</h3>

								<span className='text-xs py-2 block'>
									{" "}
									অধ্যাপক (ডাঃ) মোঃ তৌফিকুর রহমান (ফারুক)
								</span>

								<div className='grid grid-cols-2'>
									<del aria-hidden={true}>
										<bdi className='text-red-600'>100 ৳</bdi>
									</del>
									<div className='col-end-4'>
										<span className='text-md font-bold text-primary'>78 ৳</span>
									</div>
								</div>
							</div>
						</div>
						<div className='mx-7 max-h-min border-2 rounded hover:border-primary cursor-pointer p-2'>
							<img
								className='block mx-auto'
								src='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/7484be540_87341.jpg'
								alt=''
							/>
							<div className='relative'>
								<a
									href='/'
									title=''
									className='crt-btn flex items-center justify-center'>
									<FaShoppingCart className='text-white' />
								</a>
							</div>
							<div className='px-4'>
								<h3 className='text-sm font-bold'>মুনাজাত ও নামায</h3>

								<span className='text-xs py-2 block'>
									{" "}
									ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর
								</span>

								<div className='grid grid-cols-2'>
									<del aria-hidden={true}>
										<bdi className='text-red-600'>50 ৳</bdi>
									</del>
									<div className='col-end-4'>
										<span className='text-md font-bold text-primary'>37 ৳</span>
									</div>
								</div>
							</div>
						</div>
						<div className='mx-7 max-h-min border-2 rounded hover:border-primary cursor-pointer p-2'>
							<img
								className='block mx-auto'
								src='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/7d93a7652_150367.jpg'
								alt=''
							/>
							<div className='relative'>
								<a
									href='/'
									title=''
									className='crt-btn flex items-center justify-center'>
									<FaShoppingCart className='text-white' />
								</a>
							</div>
							<div className='px-4'>
								<h3 className='text-sm font-bold'>ছেলেদের মহানবী</h3>

								<span className='text-xs py-2 block'>
									খান বাহাদুর আহছানউল্লা
								</span>

								<div className='grid grid-cols-2'>
									<del aria-hidden={true}>
										<bdi className='text-red-600'>50 ৳</bdi>
									</del>
									<div className='col-end-4'>
										<span className='text-md font-bold text-primary'>45 ৳</span>
									</div>
								</div>
							</div>
						</div>
						<div className='mx-7 max-h-min border-2 rounded hover:border-primary cursor-pointer p-2'>
							<img
								className='block mx-auto'
								src='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/7d93a7652_150367.jpg'
								alt=''
							/>
							<div className='relative'>
								<a
									href='/'
									title=''
									className='crt-btn flex items-center justify-center'>
									<FaShoppingCart className='text-white' />
								</a>
							</div>
							<div className='px-4'>
								<h3 className='text-sm font-bold'>ছেলেদের মহানবী</h3>

								<span className='text-xs py-2 block'>
									খান বাহাদুর আহছানউল্লা
								</span>

								<div className='grid grid-cols-2'>
									<del aria-hidden={true}>
										<bdi className='text-red-600'>50 ৳</bdi>
									</del>
									<div className='col-end-4'>
										<span className='text-md font-bold text-primary'>45 ৳</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Offer;
