
import React, {Component} from 'react'
import {useState} from 'react';

class SelectingEvents extends Component {

  constructor({eventData, getAllRooms}) {
    super();
    this.state = {
      eventData: eventData,
      getAllRooms: getAllRooms
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value)
const eventId = (e.target.value)

//when event is selected, call function to pass it's event id+1 to groups page,
  this.state.getAllRooms(eventId)
  }

  render() {
    const eventData = this.state.eventData;
    //console.log('selectingEvent', eventData)
    return (
      <select onChange={this.handleChange}>
         {eventData.map(({event_name, id}, index) => {
           return (
             <option value={id}> {event_name} </option>
           )
         })}
    </select>
    )
  }
}
export default SelectingEvents;
