import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import gsap from 'gsap';
import "./styles/App.scss";

//Components
import Header from './components/header'
import Navigation from './components/navigation'

//pages
import Home from './pages/home';
import CaseStudies from './pages/caseStudies';
import Approach from './pages/approach';
import Services from './pages/services';
import About from './pages/about';

const routes = [
  {path: '/', name: 'Home', Component: Home}, 
  {path: '/case-studies', name: 'Case Studies', Component: CaseStudies}, 
  {path: '/approach', name: 'Approach', Component: Approach}, 
  {path: '/services', name: 'Services', Component: Services}, 
  {path: '/about-us', name: 'About Us', Component: About}
]

//routes

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); //here we define the 1 percent of the inner height and set it to the --vh variable

    gsap.to('body', {duration: 0, css: {visibility: 'visible'}}); //this sholud be for preventing white text from flashing, but its not working ...

    const HandleResize = () => { //this is a bit redundant because we already defined this but we want to update every single time the window resizes
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', HandleResize)

    return () => {
      window.removeEventListener('resize', HandleResize)
    }

  }, [])
  return (
    <>
      {console.log(dimensions)}
      <Header />
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component/>
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
