import React from "react";
import Container from "../../components/ui/Container";
import authorPage from "../../assets/images/author-page.jpg";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { useParams } from "react-router-dom";
import { useGetAuthorDetailsQuery } from "../../features/api/apiSlice";
import Loading from "../../components/ui/Loading";

const AuthorDetails = () => {
	const { id } = useParams();
	const {
		data: author,
		isLoading,
		isError,
		error,
	} = useGetAuthorDetailsQuery(id);

	// conent loaded
	let content = null;
	if (isLoading) {
		content = <Loading />;
	}
	if (!isLoading && isError) {
		content = <p className='text-red-500'>{error}</p>;
	}
	if (!isLoading && !isError) {
		content = (
			<div className='hero-content flex-col lg:flex-row bg-accent '>
				<div className='avatar'>
					<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
						<img
							src={author?.data?.imageUrl}
							alt=''
							className='rounded-lg shadow-2xl'
						/>
					</div>
				</div>
				<div>
					<h1 className='text-xl font-bold'>{author?.data?.author}</h1>
					<p className='py-2'>{author?.data?.description}</p>
				</div>
			</div>
		);
	}

	return (
		<div className='py-6'>
			<Container>
				<div className='text-sm breadcrumbs'>
					<ul>
						<Breadcrumb route='/' name='হোম' />
						<Breadcrumb route='/authors' name='লেখক' />
					</ul>
				</div>
				<section className='py-2'>
					<img src={authorPage} alt='' className='w-full' />
					<p className='pt-2 text-gray-500 text-sm'>
						লেখক! আক্ষরিক ভাবে বলতে গেলে সৃজনশীল কোনকিছু লেখেন যিনি তাকেই লেখক
						বলা যায়। কিন্তু ‘লেখক’ শব্দটির ব্যাপ্তি আসলে এতোটুকুতেই সীমাবদ্ধ নয়।
						লেখক এই বাস্তবিক জগতের সমান্তরালে একটি কাল্পনিক পৃথিবী তৈরির ক্ষমতা
						রাখেন। কাল্পনিক চরিত্রগুলো তার লেখনী ও কলমের প্রাণখোঁচায় জীবন্ত হয়ে
						ওঠে। একজন লেখক তাঁর লেখার মাধ্যমে একটি প্রজন্মের চিন্তাধারা গড়ে দিতে
						পারেন। তাই লেখকদের কিংবদন্তী হবার পথ করে দিতে রকমারি ডট কম বদ্ধ
						পরিকর।
					</p>
				</section>

				<div className='hero rounded'>{content}</div>
			</Container>
		</div>
	);
};

export default AuthorDetails;
