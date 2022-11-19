import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import Container from "../ui/Container";
import { fetchQuestions } from "../../features/questons/questionSlice";
import Loading from "../ui/Loading";

const Questions = () => {
	const [open, setOpen] = useState(0);
	const dispatch = useDispatch();
	const { questions, isLoading, isError, error } = useSelector(
		state => state.questions
	);

	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);

	const handleOpen = value => {
		setOpen(open === value ? 0 : value);
	};

	const customAnimation = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return (
			<h2 className='text-red-500 font-bold text-2xl text-center'>{error}</h2>
		);
	}

	return (
		<section className='pb-20'>
			<Container>
				{questions?.map((question, index) => (
					<Accordion open={open === index + 1} animate={customAnimation}>
						<AccordionHeader
							className='text-1xl uppercase '
							onClick={() => handleOpen(index + 1)}>
							{question.question}
						</AccordionHeader>
						<AccordionBody className='text-primary'>
							{question.answer}
						</AccordionBody>
					</Accordion>
				))}
			</Container>
		</section>
	);
};

export default Questions;
