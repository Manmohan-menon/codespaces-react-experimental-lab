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
import Layout from './components/LayoutComponent';
import Grid2 from '@mui/material/Grid2';
import {createTheme, ThemeProvider} from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#800000',
      },
      secondary: {
        main: '#a55f5f',
      },
      action: {
        hover: '#800000',
        color: '#f9f9f9',
      }
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
            <HeaderComponent />
            <Layout>
              <Routes>
                <Route path="/" element={<ImageCarousel />} />
                <Route path="/newevents" element={<NewEventsComponent />} />
                <Route path="/aboutus" element={<AboutUsComponent />} />
                <Route path="/lessons" element={<LessonsComponent />} />
                <Route path="/contactus" element={<ContactUsComponent />} />
                <Route path="/collaborations" element={<CollaborationComponent />} />
              </Routes>
            <Grid2 container spacing={3} className="cardClass" justifyContent={'center'} alignItems={'center'}>
                <Grid2 item xs={12} sm={6} md={4}>
                  <BaseCardComponent 
                    frontContent="Upcoming Events" 
                    backContent={<NewEventsComponent />} 
                    route="/newevents" 
                    extendTimer={false}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                  <BaseCardComponent 
                    frontContent="Past Events" 
                    backContent={<LessonsComponent />} 
                    route="/lessons" 
                    extendTimer={false}
                  />
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                  <BaseCardComponent 
                    frontContent="Collaborations" 
                    backContent={<CollaborationComponent />} 
                    route="/collaborations" 
                    extendTimer={false}
                  />
                </Grid2>
              </Grid2>
            </Layout>
            <FooterComponent />
          </div>
        </ThemeProvider>
    </Router>
  );
}

export default App;
