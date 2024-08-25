import './App.css';
import HeaderComponent from './components/HeaderComponent';
import SidePanelComponent from './components/SidePanelComponent';
import ImageCarousel from './components/ImageCarousel';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className='main-content'>
        <SidePanelComponent />
        <main>
          <div>
            <ImageCarousel />
          </div>
          <div className='cardClass'>
            <div className='cardClass1'>Upcoming Events</div>
            <div className='cardClass2'>Past Events</div>
            <div className='cardClass3'>Collaborations</div>
          </div>
        </main>
      </div>
      <FooterComponent />  
    </div>
  );
}

export default App;
