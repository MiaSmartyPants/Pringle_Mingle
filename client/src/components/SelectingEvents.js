import { eventNames } from 'process';
import React, {Component} from 'react'
import {useState} from 'react';

class SelectingEvents extends Component {

  constructor({eventNames, getAllRooms}) {
    super();
    this.state = {
      eventNames: eventNames,
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value)
//when event is selected, call function to pass it's event id+1 to groups page,

  }

  render() {
    const {eventNames} = this.state;
    console.log('selectingEvent', eventNames)
    return (
      <select onChange={this.handleChange}>
         {eventNames.map((name, index) => {
           return (
             <option value={index}> {name} </option>
           )
         })}
    </select>
    )
  }
}
export default SelectingEvents;
