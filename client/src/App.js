import React from "react";
import "./App.css";
import JsonData from "./data/data.json";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuth0} from "@auth0/auth0-react";
import Fetch  from "./components/Fetch";
// PAGES
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Tables from "./pages/Tables";



export default function App({data}) {
  const {user,isAuthenticated}= useAuth0();
  const [org_id,setOrg_id]= useState();
 
  
  console.log(user)

  const [landingPageData, setLandingPageData] = useState({});
  const [email, setEmail] = useState();

  useEffect(() => {
    setLandingPageData(JsonData);
    // getAdmin();
       setEmail(user?.email)
  
      
    },[isAuthenticated]);

function recieveAdminData(data){
console.log("app.js", data[0].org_id)
setOrg_id(data[0].org_id)
}



  return (
    <div className="App">
      {!!user && <Fetch user={user} recieveAdminData={recieveAdminData} />}
      <Router>
        <Navbar />
        <Routes>
        <Route path='/dashboard' element={<Dashboard org_id={org_id}/>}  />
        <Route path='/groups' element={<Groups org_id={org_id} />} />
        <Route path='/tables' element={<Tables org_id={org_id} />} />
        <Route path='/' element={<LandingPage/>} />
        </Routes>
      </Router>
    </div>
  );
}
