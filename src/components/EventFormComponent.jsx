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
    const inputFields = [
      { condition: templateConfig.showStartDate, type: "date", name: "startDate", placeholder: "", value: formData.startDate },
      { condition: templateConfig.showEndDate, type: "date", name: "endDate", placeholder: "", value: formData.endDate },
      { condition: templateConfig.showTitle, type: "text", name: "title", placeholder: "Event Title", value: formData.title },
      { condition: templateConfig.showLocation, type: "text", name: "location", placeholder: "Location", value: formData.location },
      { condition: templateConfig.showStartTime, type: "time", name: "startTime", placeholder: "", value: formData.startTime },
      { condition: templateConfig.showEndTime, type: "time", name: "endTime", placeholder: "", value: formData.endTime },
      { condition: templateConfig.showDescription, type: "textarea", name: "description", placeholder: "Event Description", value: formData.description, rows: 5, cols: 5 },
      { condition: templateConfig.showVideo, type: "text", name: "video", placeholder: "Event Video Link", value: formData.video },
      { condition: templateConfig.showName, type: "text", name: "name", placeholder: "Enter Your Name", value: formData.name },
      { condition: templateConfig.showEmail, type: "text", name: "email", placeholder: "Enter Your Email", value: formData.email },
      { condition: templateConfig.showMessage, type: "textarea", name: "message", placeholder: "Enter Your Message", value: formData.message, rows: 5, cols: 5 }
    ];
  
    return (
        <>
            {inputFields.map((field, index) => 
                field.condition && (
                    field.type === "textarea" ? (
                        <textarea
                            key={index}
                            name={field.name}
                            value={field.value}
                            onChange={handleChange}
                            rows={field.rows}
                            cols={field.cols}
                            placeholder={field.placeholder}
                        />
                    ) : (
                        <input
                            key={index}
                            type={field.type}
                            name={field.name}
                            value={field.value}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                        />
                    )
                )
            )}
        </>
    )
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
