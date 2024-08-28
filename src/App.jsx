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
import ContactUsComponent from './components/ContactUsComponent';
import CollaborationComponent from './components/CollaborationComponent';

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
              <Route path="/contactus" element={<ContactUsComponent />} />
              <Route path="/collaborations" element={<CollaborationComponent />} />
            </Routes>
            <div className='cardClass'>
              <BaseCardComponent 
                  frontContent="Upcoming Events" 
                  backContent={<NewEventsComponent />} 
                  route="/newevents" 
                  extendTimer={false}
                />
                <BaseCardComponent 
                  frontContent="Past Events" 
                  backContent={<LessonsComponent />} 
                  route="/lessons" 
                  extendTimer={false}
                />
                <BaseCardComponent 
                  frontContent="Collaborations" 
                  backContent={<CollaborationComponent />} 
                  route="/collaborations" 
                  extendTimer={false}
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
