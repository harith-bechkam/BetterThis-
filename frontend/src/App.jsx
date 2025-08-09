import { useState } from 'react'
import Home from './LandingPage/Home/Home'
import Courses from './LandingPage/Courses/Courses';
import Services from './LandingPage/Services/Services'
import UpcomingActivity from './LandingPage/UpcomingActivities/SeminarCard'
import Beforeafter from './LandingPage/beforeafter/beforeafter'
import StatsSection from './LandingPage/StatsSection/StatsSection'
import Footer from './LandingPage/Footer/Footer';
function App() {

  return (
    <>
      <Home />
      <Services />
      <Courses />
      <UpcomingActivity />
      <Beforeafter />
      <StatsSection />
      <Footer />

    </>
  )
}

export default App
