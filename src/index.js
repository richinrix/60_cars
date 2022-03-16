import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// routes
import App from "./App";
import { About, Corporate } from "./sections/";
import { Contact } from "./components/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
    {/* <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
      <HeaderAnnouncement />
      <div class=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
        <Nav />
      </div>
    </div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="corporate" element={<Corporate />} />

        <Route path="contact/:type" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
