import './App.css';
import HeaderComponent from './components/HeaderComponent';
import SidePanelComponent from './components/SidePanelComponent';
import ImageCarousel from './components/ImageCarousel';
import FooterComponent from './components/FooterComponent';

function App() {
  //previous approach
  // const images = [
  //   '../paulomi_1.jpg',
  //   '../paulomi_2.jpg',
  //   '../paulomi_3.jpg',
  //   '../paulomi_4.jpg',
  //   '../paulomi_5.jpg',
  // ];
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
