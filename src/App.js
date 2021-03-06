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

//routes
const routes = [
  {path: '/', name: 'Home', Component: Home}, 
  {path: '/case-studies', name: 'Case Studies', Component: CaseStudies}, 
  {path: '/approach', name: 'Approach', Component: Approach}, 
  {path: '/services', name: 'Services', Component: Services}, 
  {path: '/about-us', name: 'About Us', Component: About}
]

function debounce (fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  }
}

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); //here we define the 1 percent of the inner height and set it to the --vh variable

    gsap.to('body', {duration: 0, css: {visibility: 'visible'}}); //this is for preventing white text from flashing, in the css visibility is hidden at start

    const debouncedHandleResize = debounce(function handleResize()  {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }

  }) //there was no need for dependencies here, now is recaulculating the dimensions all the time that window is resized
  return (
    <>
      <Header dimensions={dimensions} />
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
