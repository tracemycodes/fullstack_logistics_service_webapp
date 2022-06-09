import React from 'react'
import AboutShipment from '../../components/about/AboutShipment'
import ClientReview from '../../components/client_review/ClientReview'
import LandingPage from '../../components/LandingPage/LandingPage'
import LogisticsService from '../../components/logistics_service/LogisticsService'
import Advantages from '../../components/merits/Advantages'
import RecentNews from '../../components/recent_news/RecentNews'
import ShipSmart from '../../components/ship_smart/ShipSmart'
import TrackShipment from '../../components/track_shipment/TrackShipment'

const Home = () => {
  return (
    <>
      <LandingPage/>
      <AboutShipment/>
      <LogisticsService/>
      <TrackShipment/>
      <ShipSmart/>
      <Advantages/>
      <RecentNews/>
      <ClientReview/>
    </>
  )
}

export default Home
