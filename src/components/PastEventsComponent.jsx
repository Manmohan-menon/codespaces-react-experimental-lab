import React, {useState,useEffect} from 'react';
import '../styles/NewEvents.css';
import Grid2 from '@mui/material/Grid2';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';


const PastEventsComponent = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        document.title = 'Past Events';
        loadEventsFromJson();
    }, []);

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
            return eventDate <= currentDate;
          })
          setEvents(filteredData);
        } catch (error) {
          console.error('Error loading events:', error);
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
      return (
        <Paper className="new-events" elevation={3}>
          <Grid2 container spacing={3} justifyContent="center" alignItems="center" direction="column">
              <Grid2 item xs={12} className="new-events-header">
                  <Typography variant="h1" component="h1" color="primary">
                     Past Events
                  </Typography>
              </Grid2>
              <Grid2 item xs={12} className="event-card">
                {renderTable()}
              </Grid2>
          </Grid2>
       </Paper>
    );
};

export default PastEventsComponent;