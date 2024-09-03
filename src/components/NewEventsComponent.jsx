import React, {useState, useEffect} from 'react';
import '../styles/NewEvents.css';
import EventFormComponent from '../components/EventFormComponent';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const NewEventsComponent = () => {
    const [events, setEvents] = useState([]);
    const [showForm, setShowForm] = useState(process.env.NODE_ENV !== 'production');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.title = 'New Events';
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
        const storedEvents = window.localStorage.getItem('events');
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        }
    };
    const addEventToLocalStorage = (eventData) => {
        const existingEvents = window.localStorage.getItem('events');
        if (existingEvents) {
          const parsedEvents = JSON.parse(existingEvents);
          parsedEvents.push(eventData);
          window.localStorage.setItem('events', JSON.stringify(parsedEvents));
        } else {
          window.localStorage.setItem('events', JSON.stringify([eventData]));
        }
      };
    
      const renderTable = () => {
        return (
          <table className="events-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td>{`${event.startDate} - ${event.endDate}`}</td>
                  <td>{event.title}</td>
                  <td>{`${event.startTime} - ${event.endTime}`}</td>
                  <td>{event.location}</td>
                  <td>{event.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
        <div className="new-events">
            <h1>Upcoming Events</h1>
            {process.env.NODE_ENV === 'development' && (
                <div className="form-btn" onClick={toggleForm}>
                    {isOpen ? <FaChevronUp className="toggle-icon" /> : <FaChevronDown className="toggle-icon" />}
                    <span className="toggle-text">{isOpen ? 'Show Form' : 'Hide Form'}</span>
                </div>
            )}
            <div className="event-card">
                {showForm ? <EventFormComponent templateConfig={templateConfig} onFormSubmit={handleFormSubmit} /> : renderTable()}
            </div>
        </div>
    );
};

export default NewEventsComponent;