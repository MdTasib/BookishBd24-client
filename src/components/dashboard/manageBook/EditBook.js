import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
	useGetBookDetailsQuery,
	useUpdateBookMutation,
} from "../../../features/api/apiSlice";
import Loading from "../../ui/Loading";

const EditBook = () => {
	const { register, handleSubmit, reset } = useForm();
	const { id } = useParams();
	const { data: book, isLoading, isError, error } = useGetBookDetailsQuery(id);
	const [editBook, { loading, ifError, editError }] = useUpdateBookMutation();

	// display book in from
	let content = null;
	if (isLoading || loading) {
		content = <Loading />;
	}
	if ((!isLoading && isError) || ifError) {
		content = toast.error(error.message || editError.message);
	}
	if (!isLoading && !isError) {
		content = (
			<div className='lg:grid md:grid grid-cols-2 gap-6'>
				<div className='w-full'>
					<label className='label'>
						<span className='label-text'>বিষয়</span>
					</label>
					<input
						{...register("subject", { required: true })}
						type='text'
						placeholder={book?.data?.subject}
						className='input input-bordered input-primary w-full max-w-xs'
					/>
				</div>
				<div>
					<label className='label'>
						<span className='label-text'>স্টকের পরিমাণ</span>
					</label>
					<input
						{...register("quentity", { required: true })}
						type='number'
						placeholder={book?.data?.quentity}
						className='input input-bordered input-primary w-full max-w-xs'
					/>
				</div>

				<div>
					<label className='label'>
						<span className='label-text'>সংস্করণ</span>
					</label>
					<input
						{...register("edition", { required: true })}
						type='text'
						placeholder={book?.data?.edition}
						className='input input-bordered input-primary w-full max-w-xs'
					/>
				</div>

				<div>
					<label className='label'>
						<span className='label-text'>মূল্য</span>
					</label>
					<input
						{...register("price", { required: true })}
						type='number'
						placeholder={book?.data?.price}
						className='input input-bordered input-primary w-full max-w-xs'
					/>
				</div>
				<div>
					<label className='label'>
						<span className='label-text'>প্রাক মূল্য</span>
					</label>
					<input
						{...register("prePrice", { required: true })}
						type='number'
						placeholder={book?.data?.prePrice}
						className='input input-bordered input-primary w-full max-w-xs'
					/>
				</div>
				<div>
					<label className='label'>
						<span className='label-text'>ডিসকাউন্ট</span>
					</label>
					<input
						{...register("discount", { required: true })}
						type='number'
						placeholder={book?.data?.discount}
						className='input input-bordered input-primary w-full max-w-xs'
					/>
				</div>
			</div>
		);
	}

	const onSubmit = async data => {
		const updateBook = {
			...book.data,
			subject: data.subject,
			quentity: Number(data.quentity),
			edition: data.edition,
			price: Number(data.price),
			prePrice: Number(data.prePrice),
			discount: Number(data.discount),
		};
		console.log({ id, data: updateBook });
		await editBook({ id, data: updateBook });
		reset();
	};

	return (
		<div className='hero'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>EditBook | BookishBD24</title>
				<meta name='description' content='BookishBD24 website using React JS' />
			</Helmet>
			<div className='hero-content w-full'>
				<div className='card w-full shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
						<div className='form-control'>
							<div className=''>
								<h4 className='text-xl font-bold text-gray-800'>Update Book</h4>

								{/* ............................... */}
								{content}
								{/* ............................... */}
							</div>
						</div>

						<div className='form-control mt-6'>
							<button className='btn btn-primary'>UPLOAD</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default EditBook;
