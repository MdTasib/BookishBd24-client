import React, { useState } from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { data } from "../../data/data";
import Container from "../ui/Container";

const Questions = () => {
	const [open, setOpen] = useState(0);

	const handleOpen = value => {
		setOpen(open === value ? 0 : value);
	};

	const customAnimation = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};
	return (
		<section className='pb-20'>
			<Container>
				{data.quetions.map((question, index) => (
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
