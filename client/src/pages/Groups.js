import React from "react";
import { useState, useEffect } from "react";
import '../App.css'
import { GroupsOfNames } from "../components/GroupsOfNames";
import SelectingEvents from '../components/SelectingEvents.js';


export default function Groups({ org_id, eventId }) {
  const [eventData, setEventData] = useState();
  const [eventNames, setEventNames] = useState();
  const [allRooms, setAllRooms] = useState();


  useEffect(() => {
    if (!org_id) {
      return undefined;
    } else {
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

  //gets data for the selection scroll
  useEffect(() => {
    if (!!eventData) {
      let arr = [];
      let eventSet = new Set;
      //loops through all duplicaions of event data and only returns the unique event names
      for (let i = 0; i < eventData.length; i++) {
        if (!eventSet.has(eventData[i].event_name)) {
          eventSet.add(eventData[i].event_name)
          arr.push(eventData[i].event_name)
        }
      }
      setEventNames(arr)
      getAllRooms()
    }
  }, [eventData])


  //fecth all groups from event id
  function getAllRooms(){//eventId) {
    //console.log(eventId)
    const eventId = 1;
    fetch(`http://localhost:5050/rooms/1`)//${eventId}`)
      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("all rooms", data)
        setAllRooms(data)
      })
  }


  return (
    <div >
      <h3>Select an Event for Rooms</h3>
      {/* selecting events needs a callback function so that so i can get a fetch request all rooms with event id */}
      {!!eventNames &&
        <SelectingEvents eventNames={eventNames} getAllRooms={getAllRooms} />
        
      }
      {!!allRooms && <GroupsOfNames allRooms={allRooms}/> }
      export to sheets here
    </div>
  );
}
