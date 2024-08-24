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
                <FaFacebook />
                <FaInstagram />
            </div>
        </div>
    </>
)
};

export default FooterComponent;