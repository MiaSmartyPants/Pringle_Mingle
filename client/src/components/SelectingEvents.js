
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

  this.state.getAllRooms(eventId)
  }

  render() {
    const eventData = this.state.eventData;
    //console.log('selectingEvent', eventData)
    return (
      <div className='select'>
      <select  onChange={this.handleChange}>
        <option className='options'>Select an event to display groups </option>
         {eventData.map(({event_name, id}, index) => {
           return (
             <option  value={id}> {event_name} </option>
           )
         })}
    </select>
    </div>
    )
  }
}
export default SelectingEvents;
