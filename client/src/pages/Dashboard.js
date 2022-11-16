import React from "react";
import { useState } from "react";
import { ContactForm } from "../components/ContactForm";

export default function Dashboard({org_id}) {
  const [data, setData] = useState(org_id);

console.log(data)

  return (
    <div >
      <h1>The Dashboard</h1>
      <form>
        <input type='text' />
      </form>
      display table
      displlay widget
      display groups
      run groups button
      
      <ContactForm data={data} />
    </div>
  );
}