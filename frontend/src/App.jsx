import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './LandingPage/Home/Home'
import Courses from './LandingPage/Courses/Courses'
import Services from './LandingPage/Services/Services'
import UpcomingActivity from './LandingPage/UpcomingActivities/SeminarCard'
import Beforeafter from './LandingPage/beforeafter/beforeafter'
import StatsSection from './LandingPage/StatsSection/StatsSection'
import Footer from './LandingPage/Footer/Footer'
import ScrollToTop from './ScrollToTop'
import Review from './LandingPage/Review'
import About from './Pages/Aboutall/About_all'
import Contact from './Pages/ContactPage/ContactPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Courses />
              <UpcomingActivity />
              <Beforeafter />
              <StatsSection />
              <Review />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/courselist" element={<CourseList />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
