import React, {useState, useEffect} from 'react';
import '../styles/NewEvents.css';
import EventFormComponent from '../components/EventFormComponent';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Grid2 from '@mui/material/Grid2';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';


const NewEventsComponent = () => {
    const [events, setEvents] = useState([]);
    const [showForm, setShowForm] = useState(process.env.NODE_ENV !== 'production');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.title = 'New Events';
        loadEventsFromJson();
    }, []);

    const toggleForm = () => {
        setIsOpen(!isOpen);
        setShowForm(!showForm);
      };
    const handleFormSubmit = async (data) => {
        await addEventToJson(data);
        loadEventsFromJson()
    };
    
    const loadEventsFromJson = async () => {
      try {
        const response = await fetch('/event-data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        const data = text ? JSON.parse(text) : [];

        const currentDate = new Date();

        const filteredData = data.filter(event =>{
          const eventDate = new Date(event.startDate);
          return eventDate >= currentDate;
        })
        setEvents(filteredData);
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };
  
    const addEventToJson = async (eventData) => {
      try {
        console.log('Sending data:', eventData);
        const response = await fetch('http://localhost:5000/save-events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        });
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Result:', result);
        // alert('Event saved successfully!');
      } catch (error) {
        console.error('Error saving event:', error.message);
        // alert('Failed to save event. Please try again.');
      }
    };
    
      const renderTable = () => {
        return (
          <TableContainer component={Paper}>
            <Table className='events-table' aria-label='events table'>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {events.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell>{`${event.startDate} - ${event.endDate}`}</TableCell>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>{`${event.startTime} - ${event.endTime}`}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>{event.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      };

      const templateConfig = {
        showStartDate: true,
        showEndDate: true,
        showTitle: true,
        showLocation: true,
        showStartTime: true,
        showEndTime: true,
        showDescription: true,
        showVideo: false,
        showName: false,
        showEmail: false,
        showMessage: false,
        submitButtonText: 'Add'
      };
      return (
        <Paper className="new-events" elevation={3}>
          <Grid2 container spacing={3} justifyContent="center" alignItems="center" direction="column">
              <Grid2 item xs={12} className="new-events-header">
                  <Typography variant="h1" component="h1" color="primary">
                     Upcoming Events
                  </Typography>
              </Grid2>
              {process.env.NODE_ENV === 'development' && (
                <Grid2 item xs={12} className="form-btn">
                  <Button onClick={toggleForm} variant="contained" color="primary" endIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}>
                    {isOpen ? 'Show Form' : 'Hide Form'}
                  </Button>
                </Grid2>
              )}
              <Grid2 item xs={12} className="event-card">
                {showForm ? <EventFormComponent templateConfig={templateConfig} onFormSubmit={handleFormSubmit} /> : renderTable()}
              </Grid2>
          </Grid2>
       </Paper>
    );
};

export default NewEventsComponent;