import { signOut } from "firebase/auth";
import React, { useState, useRef, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import auth from "../../firebase.init";
import Container from "./Container";
import Loading from "./Loading";
import MenuBar from "./MenuBar";
import profileIcon from "../../assets/icons/user.png";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../features/cart/selectors";

const Navbar = () => {
	const navigate = useNavigate();
	const inputRef = useRef(null);
	const [searchListVisible, setSearchListVisible] = useState(true);
	const [user, loading] = useAuthState(auth);
	const reSeatInput = () => {
		setSearchData([]);
		inputRef.current.value = "";
	};
	const [searchData, setSearchData] = useState([]);
	const { data: books, isLoading } = useGetBooksQuery();
	const total = useSelector(cartTotalSelector);

	if (isLoading || loading) {
		return <Loading />;
	}

	const searchItem = event => {
		const searchText = event.target.value;
		const result = books?.data?.books.filter(item => {
			return (
				item.name.toLowerCase().includes(searchText.toLowerCase()) ||
				item.nameEng.toLowerCase().includes(searchText.toLowerCase()) ||
				item.author.toLowerCase().includes(searchText.toLowerCase()) ||
				item.authorEng.toLowerCase().includes(searchText.toLowerCase())
			);
		});
		if (!searchText) {
			setSearchData([]);
		} else if (result) {
			setSearchData(result);
		} else if (result) {
			setSearchData(result);
		}
	};

	const handleNavigate = () => {
		navigate("/cart");
	};
	const menuItems = (
		<>
			{user && (
				<li className='p-0'>
					<NavLink className='text-sm mb-2 ' to='/dashboard'>
						ড্যাশবোর্ড
					</NavLink>
				</li>
			)}
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/login'>
					লগইন / রেজিস্টার
				</NavLink>
			</li>

			<li>
				<div onClick={() => handleNavigate()} className='indicator mr-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
						/>
					</svg>

					<span className='badge badge-primary badge-sm indicator-item mt-2 mr-4'>
						{total}
					</span>
				</div>
			</li>
			{/* Avatar */}
			<div className='flex-none gap-2'>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img
								src={`${user?.photoURL ? user?.photoURL : profileIcon}`}
								alt=''
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
						<li>
							<NavLink
								to='/dashboard/my-profile'
								className='justify-between w-full mb-2'>
								View Profile
							</NavLink>
						</li>
						{user && (
							<button
								onClick={() => signOut(auth)}
								className='btn btn-sm btn-primary'>
								Log Out
							</button>
						)}
					</ul>
				</div>
			</div>
		</>
	);

	return (
		<div>
			<nav
				className='navbar bg-white border-b-2 border-primary py-0'
				data-aos='fade-down'
				data-aos-easing='ease-out-cubic'
				data-aos-duration='1000'>
				<Container>
					<div className='flex-1'>
						<Link to='/' className='text-xl font-bold text-black'>
							BookishBD
							<span className='text-primary'>24</span>
						</Link>
					</div>

					<div className='relative '>
						<div className='flex items-center justify-center'>
							<div className='flex border border-primary border-2'>
								<input
									ref={inputRef}
									type='text'
									className='px-4 py-2 input-sm w-24 md:w-80 input-primary'
									placeholder='বইয়ের নাম ও লেখক দিয়ে অনুসন্ধান করুন'
									onChange={event => searchItem(event)}
								/>
								<button className='flex items-center justify-center px-4 bg-primary'>
									<svg
										className='w-6 h-6 text-white'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'>
										<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
									</svg>
								</button>
							</div>
						</div>
						<div className='absolute z-10'>
							{searchListVisible && (
								<div>
									{searchData.length ? (
										<ul className='top-12 w-[376px] h-auto px-4 bg-accent border-2 z-10 border-primary mr-2'>
											{searchData.map(data => (
												<li
													onClick={() => reSeatInput()}
													className='cursor-pointer border-b border-primary'>
													<NavLink to={`book/${data._id}`}>{data.name}</NavLink>
												</li>
											))}
										</ul>
									) : (
										""
									)}
								</div>
							)}
						</div>
					</div>

					<div className='flex-none'>
						<div className='dropdown dropdown-end'>
							<label tabIndex={2} className='btn btn-ghost lg:hidden'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h8m-8 6h16'
									/>
								</svg>
							</label>

							<ul
								tabIndex={2}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
								{menuItems}
							</ul>
						</div>
					</div>
					<div className='navbar-end hidden lg:flex flex-1'>
						<ul className='menu menu-horizontal p-0'>{menuItems}</ul>
					</div>
				</Container>
			</nav>
			<MenuBar />
		</div>
	);
};

export default Navbar;
