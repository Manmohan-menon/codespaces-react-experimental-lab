import React, {useState, useEffect, useRef} from 'react';
import '../styles/CollaborateEvents.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import BaseCardComponent from './BaseCardComponent';
import ReactPlayer from 'react-player';
import EventFormComponent from './EventFormComponent';


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
                        <div className='collaborate-card'>
                            <h3>{event.title}</h3>
                            <h4>{event.location}</h4>
                            <p>{`${event.startDate}`}</p>                        
                            {/* <p>{event.description}</p> */}
                        </div>
                    }
                    backContent={
                        <div>
                            <ReactPlayer
                                ref={playerRef} 
                                url={event.video}
                                width={"100%"}
                                height={'284px'}
                                controls={true}
                                onPause={() => {
                                    setTimeout(() => {
                                    if (playerRef.current) {
                                        playerRef.current.seekTo(0);
                                    }
                                    }, 50000);
                                }}
                            />
                        </div>
                    }
                    route={event.route}
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
        <div className="collaborate-events">
            <h1>Collaborations</h1>
            {process.env.NODE_ENV === 'development' && (
                <div className="form-btn" onClick={toggleForm}>
                    {isOpen ? <FaChevronUp className="toggle-icon" /> : <FaChevronDown className="toggle-icon" />}
                    <span className="toggle-text">{isOpen ? 'Show Form' : 'Hide Form'}</span>
                </div>
            )}
            <div className="collaborate-event-card" style={{
                display: !showForm ? 'flex' : '',
                flexWrap: !showForm ? 'wrap' : 'nowrap',
            }}>
                {showForm ? <EventFormComponent onFormSubmit={handleFormSubmit} templateConfig={templateConfig} /> : renderCard()}
            </div>
        </div>
    );
};

export default CollaborationComponent;