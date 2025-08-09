import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Headers from '../src/components/Headers/Header'
import Courses from './Pages/Courses/Courses';
import Services from './Pages/Services/Services'
import UpcomingActivity from './Pages/UpcomingActivities/SeminarCard'
import Beforeafter from './Pages/beforeafter/beforeafter'
import StatsSection from './Pages/StatsSection/StatsSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Home/>
     <Services/>
    <Courses/>
    <UpcomingActivity/>
    <Beforeafter/>
    <StatsSection/>
    
    </>
  )
}

export default App
