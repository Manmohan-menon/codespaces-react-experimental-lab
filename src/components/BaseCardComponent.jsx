import React, { useState, useEffect} from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from 'react-router-dom';

const BaseCardComponent =({ frontContent, backContent, route}) =>{
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = ()=>{
      if(isFlipped){
        navigate(route);
      }else{
        setIsFlipped(!isFlipped);
      }
    };
    useEffect(() => {
      if (isFlipped) {
        const timer = setTimeout(() => {
          setIsFlipped(false);
        }, 10000);
        return () => clearTimeout(timer);
      }
    }, [isFlipped]);
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="cardClass1" onClick={handleClick}>
          <div className="card-content">
            {frontContent}
          </div>
        </div>
        <div className="cardClass1" onClick={handleClick}>
          <div className="miniature-component">
            {backContent}
          </div>
        </div>
      </ReactCardFlip>
    )
  }

  export default BaseCardComponent;