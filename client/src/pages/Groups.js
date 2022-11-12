import React from "react";
import { useState, useEffect } from "react";
import '../App.css'
import { GroupsOfNames } from "../components/GroupsOfNames";
import SelectingEvents from '../components/SelectingEvents.js';


export default function Groups({ org_id, eventId}) {
  const [eventData, setEventData] = useState();
  const [eventNames, setEventNames] = useState([]);
  

  useEffect(() => {
    if (!org_id) {
      return undefined;
    }else{
      getEventData()
    }
  }, [org_id])

  // select all event with org_id
  function getEventData() {
    fetch(`http://localhost:5050/events/${org_id}`)

      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("data", data)
        setEventData(data)
      })
  }

  useEffect(() => {
    if(!!eventData){
      let arr=[]
      for (let i = 0; i < eventData.length; i++){
        arr.push(eventData[i].eventName)
      }
      setEventNames(arr)
      console.log(arr)
    }  
  }, [eventData])
  
  //create callback function to recieve event id selected, fetch all rooms with that id
  //fetch request to get names to tables
  //pass data to group table
  function getAllRooms(eventId){
    console.log(eventId)
      // fetch(`http://localhost:5050/rooms/${eventId}`)
      //   .then((response) => response)
      //   .then((data) => {
      //     return data.json();
      //   })
      //   .then((data) => {
      //     console.log("data", data)
      //     setEventData(data)
      //   })
  }

  return (
    <div >
      <h3>Select an Event for Rooms</h3>
      <SelectingEvents eventNames={eventNames} getAllRooms={getAllRooms}/>
      {/* <GroupsOfNames org_id={org_id} eventNames={eventNames}/> */}

      export to sheets here
    </div>
  );
}
