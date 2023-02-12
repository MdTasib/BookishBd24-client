import React from 'react';
import { useEffect } from 'react';
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
                   
                </div>
            </div>
        </Container>
    );
};

export default Contact;