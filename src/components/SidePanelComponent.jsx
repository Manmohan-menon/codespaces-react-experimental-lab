import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from 'react-icons/fa';
import '../styles/SidePanelComponent.css';

const SidePanelComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
          <div className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </div>
          <div className="menu">
            <a href="#home" className="menu-item">
              <FaHome />
              {isOpen && <span>Home</span>}
            </a>
            <a href="#aboutus" className="menu-item">
              <FaInfoCircle />
              {isOpen && <span>About Us</span>}
            </a>
            <a href="#contactus" className="menu-item">
              <FaEnvelope />
              {isOpen && <span>Contact Us</span>}
            </a>
          </div>
        </div>
      );
    };
    
    export default SidePanelComponent;