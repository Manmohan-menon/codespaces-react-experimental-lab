import React, { useState, useEffect} from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Box, Button } from '@mui/material';

const BaseCardComponent =({ frontContent, backContent, route, extendTimer, playerRef}) =>{
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = ()=>{
      if(isFlipped){
        navigate(route);
      }else{
        setIsFlipped(!isFlipped);
      }
    };

    const handleFlipBack = () => {
      setIsFlipped(false);
      if (extendTimer && playerRef.current) {
        playerRef.current.seekTo(0);
        playerRef.current.getInternalPlayer().pause();
      }
    };

    useEffect(() => {
      const delay = isFlipped && !extendTimer ? 10000 : 50000;
      const timer = setTimeout(() => {
        handleFlipBack();
      }, delay);
        return () => clearTimeout(timer);
      }, [isFlipped, extendTimer]);

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card className="cardClass1" onClick={handleClick}>
            {extendTimer && (
                <Box className="background-section">
                    <Box className="corner-dotspot-top-right" />
                    <Box className="corner-dotspot-bottom-left" />
                </Box>
            )}
            <CardContent className="card-content">
                {frontContent}
            </CardContent>
        </Card>
        <Card className="cardClass1" onClick={handleClick}>
          {extendTimer &&(<Button className="flip-back-bttn" variant="contained" color="primary" onClick={handleFlipBack} sx={{ marginTop: 2 }}>
                       back
                </Button>)}
            <CardContent className={`${!extendTimer ? 'miniature-component' : 'miniature-component-1'}`}>
                {backContent}
            </CardContent>
        </Card>
  </ReactCardFlip>
);
};

export default BaseCardComponent;