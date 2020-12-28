import React, {useEffect} from 'react'
import gsap from 'gsap';
import "./styles/App.scss";
import Header from './components/header'
import Home from './pages/home';

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); //here we define the 1 percent of the inner height and set it to the --vh variable

    gsap.to('body', {duration: 0, css: {visibility: 'visible'}}); //this sholud be for preventing white text from flashing, but its not working ...
  }, [])
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
