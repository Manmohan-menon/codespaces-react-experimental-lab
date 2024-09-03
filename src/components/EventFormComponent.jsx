import React, { useState } from 'react';
import '../styles/EventForm.css';
import PropTypes from 'prop-types';

const EventFormComponent = ({ templateConfig, onFormSubmit }) => {
    const [formData, setFormData] = useState({
      startDate: '',
      endDate: '',
      title: '',
      location: '',
      startTime: '',
      endTime: '',
      description: '',
      video: '',
      name: '',
      email: '',
      message:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        setFormData({
          startDate: '',
          endDate: '',
          title: '',
          location: '',
          startTime: '',
          endTime: '',
          description: '',
          video: '',
          name: '',
          email: '',
          message:''
        }); // Reset form data
      };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderFields = () => {
    return (
        <>
            {templateConfig.showStartDate &&(<input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />)}
            {templateConfig.showEndDate && (
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
            )}
            {templateConfig.showTitle && (<input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" />)}
            {templateConfig.showLocation && (<input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />)}
            {templateConfig.showStartTime && (<input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />)}
            {templateConfig.showEndTime && (<input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />)}
            {templateConfig.showDescription && (
                <textarea name="description" value={formData.description} onChange={handleChange} rows={5} cols={5} placeholder="Event Description" />
            )}
            {templateConfig.showVideo && (
                <input type="text" name="video" value={formData.video} onChange={handleChange} placeholder="Event Video Link" />
            )}
            {templateConfig.showName && ( <input type="text" name="Name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" />)}
            {templateConfig.showEmail && (<input type="text" name="Email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />)}
            {templateConfig.showMessage &&(<textarea name="Message" value={formData.message} onChange={handleChange} rows={5} cols={5} placeholder="Enter Your message query" />)}
        </>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>{'Add New Event'}</h2>
      {renderFields()}
      <button type="submit">{templateConfig.submitButtonText? templateConfig.submitButtonText:'Submit'}</button>
    </form>
  );
};

EventFormComponent.propTypes = {
  templateConfig: PropTypes.shape({
      showStartDate: PropTypes.bool,
      showEndDate: PropTypes.bool,
      showLocation: PropTypes.bool,
      showStartTime: PropTypes.bool,
      showEndTime: PropTypes.bool,
      showDescription: PropTypes.bool,
      showVideo: PropTypes.bool,
      showName: PropTypes.bool,
      showEmail: PropTypes.bool,
      showMessage: PropTypes.bool,
      showTitle: PropTypes.bool,
      submitButtonText: PropTypes.string
  }),
  onFormSubmit: PropTypes.func.isRequired
};

export default EventFormComponent;
