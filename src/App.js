import { ThemeProvider } from 'styled-components';
import AboutShipment from './components/about/AboutShipment';
import Advantages from './components/merits/Advantages';
import ClientReview from './components/client_review/ClientReview';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import LogisticsService from './components/logistics_service/LogisticsService';
import RecentNews from './components/recent_news/RecentNews';
import ShipSmart from './components/ship_smart/ShipSmart';
import TrackShipment from './components/track_shipment/TrackShipment';
import { LightTheme } from './theme/globalStyle';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={LightTheme}>
        <Header />
        <LandingPage />
        <AboutShipment />
        <LogisticsService />
        <TrackShipment />
        <ShipSmart />
        <Advantages />
        <RecentNews />
        <ClientReview />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
