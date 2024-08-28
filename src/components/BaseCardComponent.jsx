import React, { useState, useEffect} from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from 'react-router-dom';

const BaseCardComponent =({ frontContent, backContent, route, extendTimer}) =>{
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
      const delay = isFlipped && !extendTimer ? 10000 : 50000;
      const timer = setTimeout(() => {
        setIsFlipped(false);
        }, delay);
        return () => clearTimeout(timer);
      }, [isFlipped, extendTimer]);

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="cardClass1" onClick={handleClick}>
          {extendTimer && (<div className="background-section">
              <div className="corner-dotspot-top-right"></div>
              <div className="corner-dotspot-bottom-left"></div>
          </div>)}
          <div className="card-content">
            {frontContent}
          </div>
        </div>
        <div className="cardClass1" onClick={handleClick}>
          <div className={`${!extendTimer ? 'miniature-component' : 'miniature-component-1'}`}>
            {backContent}
          </div>
        </div>
      </ReactCardFlip>
    )
  }

  export default BaseCardComponent;