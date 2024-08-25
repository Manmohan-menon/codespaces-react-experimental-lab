import React from "react";
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import '../styles/FooterComponent.css';

const FooterComponent = ()=>{
    const year = new Date().getFullYear();
return(
    <>
        <div className="footer">            
            <span className="title">Copyright © {year} Paulomi Barman - All Rights Reserved</span>
            <div className="icons">
            <a href="https://www.facebook.com/NrityaOdori/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                {/* <span>NirtyaOdori</span> */}
            </a>
            <a href="https://www.instagram.com/nrityaodori/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            </div>
        </div>
    </>
)
};

export default FooterComponent;