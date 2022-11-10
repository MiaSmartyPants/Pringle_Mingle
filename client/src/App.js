import React from "react";
import "./App.css";
import JsonData from "./data/data.json";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuth0} from "@auth0/auth0-react";
import Fetch  from "./components/Fetch";
// PAGES
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Tables from "./pages/Tables";
import Customize from "./pages/Customize";


export default function App({data}) {
  const {user,isAuthenticated}= useAuth0();
 
  
  console.log(user)

  const [landingPageData, setLandingPageData] = useState({});
  const [email, setEmail] = useState();

  useEffect(() => {
    setLandingPageData(JsonData);
    // getAdmin();
       setEmail(user?.email)
  
      
    },[isAuthenticated]);

function recieveAdminData(data){
console.log("app.js", data)
}



  return (
    <div className="App">
      {!!user && <Fetch user={user} recieveAdminData={recieveAdminData} />}
      <Router>
        <Navbar />
        <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/groups' element={<Groups data={landingPageData.Groups} />} />
        <Route path='/tables' element={<Tables data={landingPageData.Tables} />} />
        <Route path='/customize' element={<Customize/>} />
        <Route path='/' element={<LandingPage/>} />
        </Routes>
      </Router>
    </div>
  );
}
