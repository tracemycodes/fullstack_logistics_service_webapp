import AboutShipment from "./components/LandingPage/AboutShipment";
import Advantages from "./components/LandingPage/Advantages";
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
    </div>
  );
}

export default App;
