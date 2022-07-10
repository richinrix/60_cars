import "./App.css";
import React, { useState, useEffect } from "react";
import { Nav, HeaderAnnouncement, Brands } from "./components/";
import {
  LandingSection,
  OurFleet,
  Features,
  Services,
  Contact,
  Clients,
} from "./sections/";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  let options = {
    root: document.querySelector("#sections"),
    rootMargin: "0px",
    threshold: 0.6, // percentage of the element that is visible for triggering the callback for nav
  };
  useEffect(() => {
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    // targets
    let observer = new IntersectionObserver(callback, options);
    let home = document.querySelector("#home");
    let ourFleet = document.querySelector("#our-fleet");
    let keyFeatures = document.querySelector("#key-features");
    let services = document.querySelector("#our-services");
    let contact = document.querySelector("#contact");
    // observers
    observer.observe(home);
    observer.observe(ourFleet);
    observer.observe(keyFeatures);
    observer.observe(services);
    observer.observe(contact);
  }, []);

  useEffect(() => {
    AOS.init();
  });

  const Header = () => (
    <>
      <div className="fixed z-50 lg:hidden">
        <div className="   lg:hidden ">
          <HeaderAnnouncement />
        </div>
        <div className="  py-2 font-leagueSpartan  font-extrabold bg-gray-400 bg-opacity-40 backdrop-blur-md   text-4xl w-screen flex lg:hidden justify-center items-center ">
          60 Cars
        </div>
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-50">
        <div className="hidden lg:block">
          <HeaderAnnouncement />
        </div>

        <div className=" mx-auto lg:bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current={activeSection} />
        </div>
      </div>
    </>
  );
  return (
    <div className=" overflow-x-clip ">
      {Header()}
      <div id="sections" className="   lg:px-0 mx-auto ">
        <LandingSection setActiveSection={setActiveSection} />
        <OurFleet setActiveSection={setActiveSection} />
        <Brands setActiveSection={setActiveSection} />
        <Features setActiveSection={setActiveSection} />
        <Services setActiveSection={setActiveSection} />
        <Clients setActiveSection={setActiveSection} />
        <div className="bg-black">
          <Contact setActiveSection={setActiveSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
