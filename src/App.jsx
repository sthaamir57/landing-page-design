import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }

    )()
  }, [])

  return (
    <>
    <Nav />
    {/* <div className="h-[100vh]"></div> */}
    <LandingPage />

    <div className="h-[300vh]"></div>
    </>
  )
}

export default App
