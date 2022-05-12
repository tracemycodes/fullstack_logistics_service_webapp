import AboutShipment from "./components/LandingPage/AboutShipment";
import Header from "./components/LandingPage/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import LogisticsService from "./components/LandingPage/LogisticsService";


function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <AboutShipment/>
      <LogisticsService/>
    </div>
  );
}

export default App;
