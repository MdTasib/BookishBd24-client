import React from 'react';
import { useEffect } from 'react';
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Container from '../components/ui/Container';

const Contact = () => {
    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 23.777176;
        const lon = 90.399452;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })

    return (
        <Container>
            <div className='md:grid grid-cols-2 gap-8 mt-4 mb-12'>
                <div>
                    <iframe id="iframeId" height="400px" width="100%"></iframe>
                </div>
                <div>
                    <div>
                        <h1 className='text-xl font-bold
                    '>Contact Info:</h1>
                        <div className='mt-4'>
                            <p className='text-sm'>Bookish24Bd.com</p>
                            <p className='text-sm'>Phone:</p>
                            <p className='text-sm'>email: bookish24bd@gmail.com</p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-xl font-bold
                    '>Social Networking:</h1>

                        <div className='flex mt-5'>
                            <a href='https://www.linkedin.com/in/mousumi-aktar-mou/' className='border-1 border-[#3B5999] bg-[#3B5999] rounded-full p-2 mr-4 text-white'>
                                <RiLinkedinLine size={10} />
                            </a>
                            <a href='https://web.facebook.com/mousumiaktar.mou.7923/' className='border-1 border-[#1769FF] bg-[#1769FF] rounded-full p-2 mr-4 text-white'>
                                <FaFacebookF size={10} />
                            </a>
                            <a href='https://www.instagram.com/ridimarahmanm/' className='border-1 border-[#EA4C89] bg-[#EA4C89] rounded-full p-2 text-white'>
                                <FaInstagram size={10} />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;