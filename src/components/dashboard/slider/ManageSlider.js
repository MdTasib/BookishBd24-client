import React from "react";
import { useGetSliderQuery } from "../../../features/api/apiSlice";
import Loading from "../../ui/Loading";

// SLIDER IMAGES
const sliders = [
	{
		id: 1,
		image:
			"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%87%E0%A6%9C-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%87-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A7%80-%E0%A6%9B%E0%A6%BE%E0%A6%A1%E0%A6%BC_desktop.jpg",
	},
	{
		id: 2,
		image:
			"https://wafilife-media.wafilife.com/uploads/2022/12/muslim-day-planner_desktop.jpg",
	},
	{
		id: 3,
		image:
			"https://wafilife-media.wafilife.com/uploads/2021/03/%E0%A6%AC%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%B0-%E0%A6%89%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8_desktop.jpg",
	},
];

const ManageSlider = () => {
	const { data, isLoading, isError, error } = useGetSliderQuery();

	// conent loaded
	let content = null;
	if (isLoading) {
		content = <Loading />;
	}
	if (!isLoading && isError) {
		content = <p className='text-red-500'>{error}</p>;
	}
	if (!isLoading && !isError && data?.data.length === 0) {
		content = (
			<p className='text-red-500 text-xl font-bold'>
				কোনো স্লাইডার পাওয়া যায়নি!
			</p>
		);
	}
	if (!isError && !isLoading && data?.data?.length > 0) {
		content = data?.data?.map((slider, index) => (
			<tr>
				<th>{index + 1}</th>
				<td>
					<img className='h-8' src={slider?.image} alt='' />
				</td>
				<td>
					<button className='bg-red-500 px-2 rounded text-white'>Delete</button>
				</td>
			</tr>
		));
	}

	return (
		<div className='mt-12'>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th></th>
							<th>Image</th>
							<th>Remove Slider</th>
						</tr>
					</thead>
					<tbody>{content}</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageSlider;
