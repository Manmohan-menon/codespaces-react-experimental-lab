import React, {useEffect} from 'react';
import '../styles/ContactUs.css';
import EventFormComponent from './EventFormComponent';
import Grid2 from '@mui/material/Grid2';
import { Typography, Paper } from '@mui/material';

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
        <Paper className="contact-us" elevation={3}>
            <Grid2 container spacing={3} justifyContent="center" alignItems="center" direction="column">
                <Grid2 item xs={12} className="contact-us-header">
                    <Typography variant="h1" component="h1" color="primary">
                        Contact Us
                    </Typography>
                </Grid2>
                <Grid2 item xs={12}>
                    <Typography variant="body1" component="p">
                        We value your feedback and inquiries. Our team will get back to you as soon as possible.
                    </Typography>
                </Grid2>
                <Grid2 item xs={12} className="contact-form-placeholder">
                    <EventFormComponent onFormSubmit={handleSubmit} templateConfig={templateConfig} />
                </Grid2>
            </Grid2>
        </Paper>
    );
};

export default ContactUsComponent;