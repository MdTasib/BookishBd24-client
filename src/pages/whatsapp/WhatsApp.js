import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import CompanyIcon from "../../assets/images/logo-sm.png";

const WhatsApp = () => {
    return (
        <WhatsAppWidget 
        message={`Hello! 👋🏼 \n\nWhat can we do for you?`}
        phoneNumber="+8801518477021" />
    );
};

export default WhatsApp;