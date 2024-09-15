import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Typography, IconButton, Collapse, Paper, Grid2 } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import BaseCardComponent from './BaseCardComponent';
import ReactPlayer from 'react-player';
import EventFormComponent from './EventFormComponent';
import '../styles/CollaborateEvents.css';


const CollaborationComponent = () => {
    const [collaborateEvents, setCollaborateEvents] = useState([]);
    const [showForm, setShowForm] = useState(process.env.NODE_ENV !== 'production');
    const [isOpen, setIsOpen] = useState(false);
    const playerRef = useRef();

    useEffect(() => {
        document.title = 'Collaborations';
        loadEventsFromLocalStorage();
    }, []);

    const toggleForm = () => {
        setIsOpen(!isOpen);
        setShowForm(!showForm);
      };
    const handleFormSubmit = (data) => {
        addEventToLocalStorage(data);
        loadEventsFromLocalStorage();
    };
    
    const loadEventsFromLocalStorage = () => {
        const storedEvents = window.localStorage.getItem('collaborateEvents');
        if (storedEvents) {
            setCollaborateEvents(JSON.parse(storedEvents));
        }
    };
    const addEventToLocalStorage = (eventData) => {
        const existingEvents = window.localStorage.getItem('collaborateEvents');
        if (existingEvents) {
          const parsedEvents = JSON.parse(existingEvents);
          parsedEvents.push(eventData);
          window.localStorage.setItem('collaborateEvents', JSON.stringify(parsedEvents));
        } else {
          window.localStorage.setItem('collaborateEvents', JSON.stringify([eventData]));
        }
    };
    
      const renderCard = () => {
            return collaborateEvents.map((event, index) => (

                <BaseCardComponent 
                    key={index} 
                    frontContent={
                        <Box>
                            <Typography variant="h5">{event.title}</Typography>
                            <Typography variant="subtitle1">{event.location}</Typography>
                            <Typography variant="body2">{`${event.startDate}`}</Typography>
                            {console.log(playerRef.current)}
                        </Box>
                    }
                    backContent={
                        <Box>
                            <ReactPlayer
                                ref={playerRef} 
                                url={event.video}
                                width={"100%"}
                                height={'284px'}
                                controls={true}
                                onPause={() => {
                                    setTimeout(() => {
                                        if (playerRef.current[index]) {
                                            playerRef.current[index].seekTo(0);
                                        }
                                    }, 50000);
                                }}
                            />
                        </Box>
                    }
                    route={event.route}
                    playerRef={playerRef.current}
                    extendTimer={true}
                />
            ));
        };
        const templateConfig = {
            showStartDate: true,
            showEndDate: false,
            showTitle: true,
            showLocation: true,
            showStartTime: false,
            showEndTime: false,
            showDescription: false,
            showVideo: true,
            showName: false,
            showEmail: false,
            showMessage: false,
            submitButtonText: 'Add Video'
        };
      return (
        <Paper className="collaborate-events" elevation={3}>
          <Grid2 container spacing={3} justifyContent="center" alignItems="center" direction="column">
              <Grid2 item xs={12} className="collaborate-events-header">
                  <Typography variant="h1" component="h1" color="primary">
                     Collborations
                  </Typography>
              </Grid2>
                {process.env.NODE_ENV === 'development' ? (
                    <>
                        <Grid2 item xs={12} className="form-btn">
                            <Button variant="contained" color="primary" onClick={toggleForm} sx={{ marginBottom: 2 }}>
                                {isOpen ? <ExpandLess /> : <ExpandMore />}
                                {isOpen ? 'Show Form' : 'Hide Form'}
                            </Button>
                        </Grid2>
                        {/* <Grid2 item xs={12} className="collaborate-event-card" sx={{ display: !showForm ? 'flex' : 'block', flexWrap: !showForm ? 'wrap' : 'nowrap' }}>
                            {showForm ? <EventFormComponent onFormSubmit={handleFormSubmit} templateConfig={templateConfig} /> : renderCard()}
                        </Grid2> */}

                        <Box sx={{ display: !showForm ? 'flex' : 'block', flexWrap: !showForm ? 'wrap' : 'nowrap' }}>
                            {showForm ? <EventFormComponent onFormSubmit={handleFormSubmit} templateConfig={templateConfig} /> : renderCard()}
                        </Box>
                    </>
                ) : (
                    <Box className="collaborate-events" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {renderCard()}
                    </Box>
                )}
            </Grid2>
        </Paper>
    );
};

export default CollaborationComponent;