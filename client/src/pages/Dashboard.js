import React from "react";
import { useState, useEffect } from "react";
import { ClockWidget } from "../components/ClockWidget";
import { ContactForm } from "../components/ContactForm";
import Weather from "../data/Weather.png"

export default function Dashboard({ org_id }) {
  const [orgId, setOrgId] = useState(org_id);
  console.log(org_id)

  console.log(org_id)
  useEffect(() => {
    if (!org_id) {
      return undefined;
    } else {
      setOrgId(org_id)
    }
  }, [org_id])
  //use effect based on org id, call set orgid
  return (
    <div >
      <h1>The Dashboard</h1>
      <div className="child graph">
        <img src="https://media.giphy.com/media/fX1WbBccfGlffLwCjZ/giphy.gif" />

        <div className="child pic">
          <img src={Weather} />
        </div>
        <div className="parent">
          <ContactForm orgId={orgId} />
        </div>



      </div>

    </div>
  );
}