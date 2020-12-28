import React, {useEffect} from "react";
import gsap from 'gsap';
import "./styles/App.scss";
import Header from './components/header'
import Banner from './components/banner'
import Cases from './components/cases'
import IntroOverlay from "./components/introOverlay";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); //here we define the 1 percent of the inner height and set it to the --vh variable

    gsap.to('body', {duration: 0, css: {visibility: 'visible'}}); //this is for preventing white text from flashing, but its not working ...

    //timeline
    const tl = gsap.timeline();

    tl.from('.line span', {
      duration: 1.8, 
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    }).to('.overlay-top', {
      duration: 1.6,
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    }).to('.overlay-bottom', {
      duration: 1.6,
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    }).to('.intro-overlay', {
      duration: 0,
      css: {
        display: 'none'
      }
    }).from('.case-image img', {
      duration: 1.6,
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4
      }
    });

  }, [])
  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
