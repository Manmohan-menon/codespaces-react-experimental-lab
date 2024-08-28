// EventFormComponent.js
import React, { useState } from 'react';
import '../styles/EventForm.css';

const CollaborateEventFormComponent = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
      startDate: '',
      endDate: '',
      title: '',
      location: '',
      description: '',
      video: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        setFormData({
          startDate: '',
          endDate: '',
          title: '',
          location: '',
          description: '',
          video: ''
        }); // Reset form data
      };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>Add New Event</h2>
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <textarea name="description" value={formData.description} onChange={handleChange} rows={5} cols={5} placeholder="Event Description (optional)" />
      <input type="text" name="video" value={formData.video} onChange={handleChange} placeholder="Event Video Link" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CollaborateEventFormComponent;
