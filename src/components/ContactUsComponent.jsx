import React, {useEffect} from 'react';
import '../styles/ContactUs.css';
import EventFormComponent from './EventFormComponent';

const ContactUsComponent = () => {
    useEffect(() => {
        document.title = 'Contact Us';
        loadEventsFromLocalStorage();
    }, []);

    const handleSubmit = (data) => {
        addEventToLocalStorage(data);
        loadEventsFromLocalStorage();
    };

    const loadEventsFromLocalStorage = () => {
        const storedEvents = window.localStorage.getItem('contactEvents');
        if (storedEvents) {
            setCollaborateEvents(JSON.parse(storedEvents));
        }
    };

    const addEventToLocalStorage = (eventData) => {
        const existingEvents = window.localStorage.getItem('contactEvents');
        if (existingEvents) {
          const parsedEvents = JSON.parse(existingEvents);
          parsedEvents.push(eventData);
          window.localStorage.setItem('contactEvents', JSON.stringify(parsedEvents));
        } else {
          window.localStorage.setItem('contactEvents', JSON.stringify([eventData]));
        }
      };

    const templateConfig = {
        showStartDate: false,
        showEndDate: false,
        showLocation: false,
        showStartTime: false,
        showEndTime: false,
        showDescription: false,
        showVideo: false,
        showName: true,
        showEmail: true,
        showMessage: true,
        submitButtonText: 'Send'
    };
    return (
        <section className="contact-us">
            <h1>Contact Us</h1>
            <p>We value your feedback and inquiries. Our team will get back to you as soon as possible.</p>
            <div className="contact-form-placeholder">
                <h3>Karya pragati par h!...</h3>
                <EventFormComponent onFormSubmit={handleSubmit} templateConfig={templateConfig} />
            </div>
        </section>
    );
};

export default ContactUsComponent;