import {useEffect} from 'react'
import Welcome from './welcome';
import NavigationBar from './navbar';
import DronePilot from './dronePilot';
import Services from './services';
import About from './about';
import Work from './work';
import Team from './team';
import Partners from './partners';
import Contact from './contact';
import Footer from './footer';
import Video from './video';
import Accordion from './accordion';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const navItems = [
    {
        name: "HOME",
        id: "#none"
    },
    {
        name: "ABOUT US",
        id: "#about"
    },
    {
        name: "SERVICES",
        id: "#services"
    },
    {
        name: "ABOUT US",
        id: "#about"
    },
    {
        name: "TEAM",
        id: "#team"
    },
    {
        name: "CLIENTS",
        id: "#partners"
    }

  ]
  useEffect(() => {
    const aboutContainer = document.querySelector('.about-container');
    const workTopContainer = document.querySelector('.work-top-container');
    const pilotContent = document.querySelector('.pilot-content');
    const teamContent = document.querySelector('.team-content');
    const options = {
      root: null,
      threshold: 1,
      rootMargin: "100px"
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.toggle('animate');
        observer.unobserve(entry.target);
      });
    }, options);

    observer.observe(aboutContainer);
    observer.observe(workTopContainer);
    observer.observe(pilotContent);
    observer.observe(teamContent);

    const home = document.querySelector('.home');
    const sunset = document.querySelector('.sunset');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 1000) {
        if(home) {
        home.classList.add('hide');}
        if(sunset){
        sunset.classList.remove('hide');}
      } else {
        if(home) {
        home.classList.remove('hide');}
        if(sunset){
        sunset.classList.add('hide');}
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
      observer.disconnect();
    };
  }, []);


  return (
    <>
    <Video />
    <main>
        <Welcome />
        <NavigationBar  navItems={navItems}/>
        <DronePilot />
        <Services />
        <About />
        <Work />
        <Outlet />
        <Team />
        <Partners />
        <Contact />
        <Accordion />
        <Footer />
    </main>
    <div className="sunset hide">
    </div> 
    </>
  )
}