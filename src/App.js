import AboutShipment from "./components/LandingPage/AboutShipment";
import Advantages from "./components/LandingPage/Advantages";
import ClientReview from "./components/LandingPage/ClientReview";
import Footer from "./components/LandingPage/Footer";
import Header from "./components/LandingPage/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import LogisticsService from "./components/LandingPage/LogisticsService";
import ShipSmart from "./components/LandingPage/ShipSmart";
import TrackShipment from "./components/LandingPage/TrackShipment";


function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <AboutShipment/>
      <LogisticsService/>
      <TrackShipment/>
      <ShipSmart/>
      <Advantages/>
      <ClientReview/>
      <Footer/>
    </div>
  );
}

export default App;
