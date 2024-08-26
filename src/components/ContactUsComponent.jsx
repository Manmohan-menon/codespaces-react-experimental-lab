import React, {useEffect} from 'react';
import '../styles/ContactUs.css';

const ContactUsComponent = () => {
    useEffect(() => {
        document.title = 'Contact Us';
    }, []);
    return (
        <section className="contact-us">
            <h1>Contact Us</h1>
            <p>We value your feedback and inquiries. Our team will get back to you as soon as possible.</p>
            <div className="contact-form-placeholder">
                <h3>Loading Soon...</h3>
            </div>
        </section>
    );
};

export default ContactUsComponent;