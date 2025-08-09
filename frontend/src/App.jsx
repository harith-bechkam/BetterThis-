import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Headers from './components/Headers/Header';
import Courses from './Pages/Courses/Courses';
import Services from './Pages/Services/Services';
import UpcomingActivity from './Pages/UpcomingActivities/SeminarCard';
import Beforeafter from './Pages/beforeafter/beforeafter';
import StatsSection from './Pages/StatsSection/StatsSection';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <>
      {/* <Headers /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/activities" element={<UpcomingActivity />} />
        <Route path="/beforeafter" element={<Beforeafter />} />
        <Route path="/stats" element={<StatsSection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
