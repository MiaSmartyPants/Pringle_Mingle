import React from "react";
import { ContactForm } from "../components/ContactForm";

export default function Dashboard({name, email}) {

  function postAdmin({name, email}){
console.log('/dashboard', name, email)
  }
  return (
    <div >
      <h1>The Dashboard</h1>
      
      display table
      displlay widget
      display groups
      run groups button
      
      <ContactForm props={postAdmin} />
    </div>
  );
}