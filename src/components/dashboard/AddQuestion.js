import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddQuestion = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async data => {
		const faq = {
			question: data.question,
			answer: data.answer,
		};

		fetch(`https://beatnik-task-server.vercel.app/questions`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(faq),
		})
			.then(res => res.json())
			.then(data => {
				reset();
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Successfully upload a question",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	return (
		<div className='hero'>
			<div className='hero-content w-full'>
				<div className='card w-full shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
						<div className='form-control'>
							<div className=''>
								<label className='label'>
									<span className='label-text'>Question?</span>
								</label>
								<input
									{...register("question", { required: true })}
									type='text'
									placeholder='Your Question'
									className='input input-bordered input-primary w-full'
								/>
							</div>

							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Question Answer</span>
								</label>
								<textarea
									{...register("answer", { required: true })}
									className='textarea textarea-primary w-full'
									placeholder='Your Answer'></textarea>
							</div>
						</div>

						<div className='form-control mt-6'>
							<button className='btn btn-primary'>ADD QUESTION</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddQuestion;
