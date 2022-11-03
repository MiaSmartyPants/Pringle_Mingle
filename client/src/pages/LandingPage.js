import React from "react";
import  LoginButton  from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
export default function LandingPage() {
  return (
    <div >
      <h1>Landing Page</h1>
      <div className="loginLanding">
      <LoginButton/>
      
      </div>
    </div>
  );
}