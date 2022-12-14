import React, { useState, useEffect } from "react";
import { FaSort } from "react-icons/fa";
import '../App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CustomizeForm } from "../components/CustomizeForm";
import { EventsGuestsList } from "../components/EventsGuestsList";
import { EnterNames } from "../components/EnterNames";




export default function Tables({ org_id, eventName, guests }) {
  const [events, setEvents] = useState([]);
  const [data, setData] = useState(org_id);
  const [result, setResult] = useState();

  useEffect(() => {
    // CALL here
    if (org_id) {
      getData()
      setData(org_id)
    }

    console.log('Tables', org_id)
  }, [org_id])

  // if(!org_id){
  //       return null;
  //   }
  // fecth data is called to get events with  with orgid
  function getData() {
    fetch(`/events/${org_id}`)

      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("data", data)
        setEvents(data)

      })
  }
  //filter data here to only include unique values of event name and all associated guests
  useEffect(() => {
    // CALL here
    if (events) {
      f(events)
    }

  }, [events])


  console.log('events for tableofNames', data)

  function f(events) {
    if (events === undefined || events === null) {
      throw new Error();
    }
    const result = {};
    for (const item of events) {
      if (!(item.id in result)) {
        result[item.id] = {
          'event_id': item.id,
          'event_name': item.event_name,
          'guest_names': [],
        }
      }
      const obj = result[item.id];
      obj['guest_names'].push(item.guest_name);
    }
    console.log('result', result)
    setResult(result);
  }
  //result = []






  return (
    <div >
      <div>
        <h1>All Your Events</h1>
        <div className="paragraph">
           <h3>Start by creating an event table. This will be all the names you will later sort into groups. After clicking submit, refresh the page and select your options for create groups. Your results will be waitng for you on the groups page!</h3>
        </div>
       
        {data &&
          <Popup trigger={<button className="creatTableButton">Create Event Table</button>} position="right center">
            <div>Customize Your Rooms</div>
            <EnterNames org_id={data} />
          </Popup>
        }
      </div>
      <br></br><br></br>
      {/* table of names load guests names instead of guest guest_ids */}
      {result && <EventsGuestsList result={result} />}


    </div>
  );

}