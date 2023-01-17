import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className='drawer drawer-mobile'>
			<input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content p-5'>
				{/* <!-- Page content here --> */}
				<Outlet />
			</div>
			<div className='drawer-side z-0'>
				<label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
				<ul className='menu p-4 overflow-y-auto w-52 bg-accent text-base-content'>
					{/* <!-- Sidebar content here --> */}
					<li className='text-primary my-1'>
						<NavLink to='/dashboard/add-slider'>Add Slider</NavLink>
					</li>
					<li className='text-primary my-1'>
						<NavLink to='/dashboard/add-product'>Add Book</NavLink>
					</li>
					<li className='text-primary my-1'>
						<NavLink to='/dashboard/add-question'>Add Question</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
