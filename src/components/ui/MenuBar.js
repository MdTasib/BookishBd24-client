import React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
	const menuItems = (
		<>
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/'>
					হোম
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/bookroute'>
					বই
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/generalbook'>
					জেনারেল বই
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/subject'>
					বিষয়
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/authors'>
					লেখক
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/prokasok'>
					প্রকাশক
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/book-fire'>
					বইমেলা ২০২২
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 text-sm py-1 mb-2' to='/pri-order'>
					প্রি-অর্ডার
				</NavLink>
			</li>
		</>
	);

	return (
		<div className='navbar shadow px-10 py-0'>
			<div className='navbar py-0'>
				<div className='dropdown'>
					<label tabIndex='0' className='btn btn-ghost lg:hidden'>
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
						tabIndex='0'
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
						{menuItems}
					</ul>
				</div>
				<div className='navbar hidden lg:flex'>
					<ul className='menu menu-horizontal p-0'>{menuItems}</ul>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
