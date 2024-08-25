import './App.css';
import HeaderComponent from './components/HeaderComponent';
import SidePanelComponent from './components/SidePanelComponent';
import ImageCarousel from './components/ImageCarousel';
import FooterComponent from './components/FooterComponent';
import AboutUsComponent from './components/AboutUsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
              <Route path="/aboutus" element={<AboutUsComponent />} />
            </Routes>
            <div className='cardClass'>
              <div className='cardClass1'>Upcoming Events</div>
              <div className='cardClass2'>Past Events</div>
              <div className='cardClass3'>Collaborations</div>
            </div>
          </main>
        </div>
        <FooterComponent />  
      </div>
    </Router>
  );
}

export default App;
