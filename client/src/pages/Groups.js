import React from "react";
import { useState, useEffect } from "react";
import '../App.css'
import { GroupsOfNames } from "../components/GroupsOfNames";
import SelectingEvents from '../components/SelectingEvents.js';


export default function Groups({ org_id, eventId }) {
  const [eventData, setEventData] = useState();
  //const [eventNames, setEventNames] = useState();
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
    fetch(`/eventlist/${org_id}`)

      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("data", data)
        setEventData(data)
      })
  }

  //formatted data for the selection scroll
  // useEffect(() => {
  //   if (!!eventData) {
  //     let arr = [];
  //     let eventSet = new Set;
  //     //loops through all duplicaions of event data and only returns the unique event names
  //     for (let i = 0; i < eventData.length; i++) {
  //       if (!eventSet.has(eventData[i].event_name)) {
  //         eventSet.add(eventData[i].event_name)
  //         arr.push(eventData[i].event_name)
  //       }
  //     }
  //     setEventNames(arr)

  //   }
  // }, [allRooms])


  //fecth all groups from event id
  function getAllRooms(eventId) {//eventId) {
    console.log('/groups with fetch', eventId)

    fetch(`/rooms/${eventId}`)//${eventId}`)
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
      <div  className="paragraph">
       <h3>Display the groups by selecting the event. If no groups are displayed, head the the tables page and follow the direction at the top!</h3>
      <h4> Each line is a new group!</h4>       
      </div>

      {/* selecting events needs a callback function so that so i can get a fetch request all rooms with event id */}
      {!!eventData &&
        <SelectingEvents eventData={eventData} getAllRooms={getAllRooms} />

      }
      <br></br><br></br><br></br><br></br>
      {!!allRooms && <GroupsOfNames allRooms={allRooms} />}
    </div>
  );
}
