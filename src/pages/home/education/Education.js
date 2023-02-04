import React from 'react';
import Container from '../../../components/ui/Container';
import education from "../../../assets/images/education/education.jpg"
import education2 from "../../../assets/images/education/education2.jpg"
import education3 from "../../../assets/images/education/education3.jpg"

const Education = () => {
    return (
        <Container>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 m-6'>
                <img data-aos="fade-down"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="500" src={education} alt="" />
                <img data-aos="fade-up"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="500" src={education2} alt="" />
                <img data-aos="fade-down"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="500" src={education3} alt="" />
            </div>
        </Container>
    );
};

export default Education;