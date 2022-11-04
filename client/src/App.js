import React from "react";
import "./App.css";
import JsonData from "./data/data.json";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// PAGES
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Tables from "./pages/Tables";
import Customize from "./pages/Customize";

export default function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/groups' element={<Groups data={landingPageData.Groups} />} />
        <Route path='/tables' element={<Tables data={landingPageData.Tables} />} />
        <Route path='/customize' element={<Customize/>} />
        </Routes>
      </Router>
    </div>
  );
}
