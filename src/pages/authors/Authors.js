import React from "react";
import Container from "../../components/ui/Container";
import Breadcrumb from "../../components/ui/Breadcrumb";
import authorPage from "../../assets/images/author-page.jpg";
import { authors } from "../../data/data";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";


const Authors = () => {
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

				<div class='flex items-center py-4'>
					<div class='flex border border-primary border-2'>
						<input
							type='text'
							class='px-4 py-2 input-sm w-24 md:w-80 input-primary'
							placeholder='লেখকের নাম দিয়ে অনুসন্ধান করুন'
						/>
						<button class='flex items-center justify-center px-4 bg-primary'>
							<svg
								class='w-6 h-6 text-white'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
							</svg>
						</button>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4'>
					{authors.map(author => (
						<div
							key={author.id}
							class='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md'>
							<div class='flex flex-col items-center py-3'>
								<img
									class='w-24 border-primary border border-3 h-24 mb-3 rounded-full shadow-lg'
									src={author.author}
									alt={author.name}
								/>
								<h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
									{author.name}
								</h5>
								<div class='text-center'>
									<Link to={`/authors/${author.id}`}>
										<Button>বিস্তারিত</Button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Authors;
