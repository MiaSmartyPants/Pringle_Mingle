import React, { useState, useEffect } from "react";
import { FaSort } from "react-icons/fa";
import '../App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CustomizeForm } from "../components/CustomizeForm";
import { TableOfNames } from "../components/TableOfNames";
import { EnterNames } from "../components/EnterNames";




export default function Tables({ org_id }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // CALL here
    if (org_id) {
      getData()
    }

    console.log('Tables', org_id)
  }, [org_id])

  // if(!org_id){
  //       return null;
  //   }
  // fecth data is called to get events with  with orgid
  function getData() {
    fetch(`http://localhost:5050/events/${org_id}`)

      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("data", data)
        setEvents(data)

      })
  }




  return (
    <div >
      <div>
      <h1>All Your Events</h1>
      <Popup trigger={<button>Create Event Table</button>} position="right center">
            <div>Customize Your Rooms</div>
            <EnterNames />
          </Popup>
      
      </div>
      <br></br><br></br>
      <TableOfNames data={events} />
     

      {/* <button onClick={createRooms}>create breakout rooms</button> */}

    </div>
  );

}