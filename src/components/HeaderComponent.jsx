import React from "react";
import {FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa';
import '../styles/HeaderComponent.css';

const HeaderComponent = ()=>{
return(
    <>
        <div className="header">
            <img src="//img1.wsimg.com/isteam/ip/a162f093-0f81-473b-a971-d28b422f6208/NO1.png/:/rs=h:123,cg:true,m/qt=q:95" alt="Logo" className="logo" />
            <span className="title">PaulomiBurman</span>
            <div className="icons">
                <FaSearch />
                <FaShoppingCart />
                <FaUser />
            </div>
        </div>
    </>
)
};

// const styles = {
//     header: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '10px',
//       backgroundColor: 'ffff'//'#f8f8f8',
//     },
//     logo: {
//       width: '7.5rem',
//       height: '7rem',
//       marginRight: '20px',
//       borderRadius: '50%',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       transform: 'rotate(3.5deg)'
//     },
//     title: {
//       flex: 1,
//       textAlign: 'center',
//     },
//     icons: {
//       display: 'flex',
//       gap: '10px',
//     },
//   };
export default HeaderComponent;