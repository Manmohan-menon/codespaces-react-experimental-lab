import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTheaterMasks, FaShoppingBag, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/SidePanel.css';

const SidePanelComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isResized, setIsResized] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    const toggleResize = () => {
      setIsResized(!isResized);
    };
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} style={{ width: isResized ? '1%' : '' }}>
          {!isResized &&(<div className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </div>)}
          {!isOpen && (<div className="resize-btn" onClick={toggleResize}>
                {isResized ? <FaPlus /> : <FaMinus />}
            </div>)}
          <div className={`menu ${isResized ? 'menu-hidden' : ''}`}>
            <Link to="/" className="menu-item">
              <FaHome />
              {isOpen && <span>Home</span>}
            </Link>
            <Link to="/aboutus" className="menu-item">
              <FaInfoCircle />
              {isOpen && <span>About Us</span>}
            </Link>
            <Link to="/contactus" className="menu-item">
              <FaEnvelope />
              {isOpen && <span>Contact Us</span>}
            </Link>
            <Link to="/lessons" className="menu-item">
              <FaTheaterMasks />
              {isOpen && <span>Lessons</span>}
            </Link>
            <Link to="/merchandise" className="menu-item">
              <FaShoppingBag />
              {isOpen && <span>Merchandise</span>}
            </Link>
          </div>
        </div>
      );
    };
    
    export default SidePanelComponent;