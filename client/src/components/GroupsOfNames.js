import React, { useState, useEffect } from 'react'

export const GroupsOfNames = ({ allRooms }) => {
  const [result, setResult] = useState();


 //trying to make an object that i can later turn into a table
    // for every round has multiple rooms, each room has their  array of guests
      /*{
        round 1:{
          group1: guest names[]
          group 2; guest names[]
        }
        round 2:{
      room 1: guest names[]
          room 2; guest names[]
        }*/
  function f(allRooms) {
    if (allRooms === undefined || allRooms === null) {
      throw new Error();
    }
    const result = {};
    for (const item of allRooms) {
      if (!(item.round in result)) {
        result[item.round] = {
          'round': item.round,
            'break out rooms': {
              'room name': item.room,
              'guest_names': [],
            }
          }
        }
      
      const obj = result[item.round];
       obj['break out rooms']['guest_names'].push(item.guest_names);
      obj['break out rooms']['room name'] = (item.room);
    }
    console.log('rounds of names', result)
    setResult(result);
  }
  
  useEffect(() => {
    // CALL here
    if (allRooms) {
      f(allRooms)
    }

  }, [])
  return (
    <div>
<form>
  <textarea disabled value={"groups Will be displayed here for copyable ability"} rows="5" cols="40"/>
</form>
    </div>


  )
}
