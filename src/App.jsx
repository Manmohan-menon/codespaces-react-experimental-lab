import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import SidePanelComponent from './components/SidePanelComponent';
import ImageCarousel from './components/ImageCarousel';
import FooterComponent from './components/FooterComponent';
import AboutUsComponent from './components/AboutUsComponent';
import LessonsComponent from './components/LessonsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseCardComponent from './components/BaseCardComponent';
import NewEventsComponent from './components/NewEventsComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <div className='main-content'>
          <SidePanelComponent />
          <main>
          <Routes>
              <Route path="/" element={<ImageCarousel />} />
              <Route path="/newevents" element={<NewEventsComponent />} />
              <Route path="/aboutus" element={<AboutUsComponent />} />
              <Route path="/lessons" element={<LessonsComponent />} />              
            </Routes>
            <div className='cardClass'>
              <BaseCardComponent 
                  frontContent="Upcoming Events" 
                  backContent={<NewEventsComponent />} 
                  route="/newevents" 
                />
                <BaseCardComponent 
                  frontContent="Past Events" 
                  backContent={<LessonsComponent />} 
                  route="/lessons" 
                />
                <BaseCardComponent 
                  frontContent="Collaborations" 
                  backContent={<AboutUsComponent />} 
                  route="/aboutus" 
                />
            </div>
          </main>
        </div>
        <FooterComponent />  
      </div>
    </Router>
  );
}

export default App;
