import React from "react";
import { FaUser} from 'react-icons/fa';
import '../styles/HeaderComponent.css';

const HeaderComponent = ()=>{
return(
    <>
        <div className="header">
            <img src="//img1.wsimg.com/isteam/ip/a162f093-0f81-473b-a971-d28b422f6208/NO1.png/:/rs=h:123,cg:true,m/qt=q:95" alt="Logo" className="logo" />
            <span className="title">PaulomiBarman</span>
            <div className="icons">
                {/* <FaSearch />
                <FaShoppingCart /> */}
                <FaUser />
            </div>
        </div>
    </>
)
};

export default HeaderComponent;