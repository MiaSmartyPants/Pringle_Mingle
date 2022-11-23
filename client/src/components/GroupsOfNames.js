import React, { useState, useEffect } from 'react'

export const GroupsOfNames = ({ allRooms }) => {
  const [roundsOfNames, setRoundsOfNames] = useState();


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
  function groupRoomsByRounds(allRooms) {
    if (allRooms === undefined || allRooms === null) {
      throw new Error();
    }
    const result = {};
    for (const room of allRooms) {
      if (!(room.round in result)) {
        result[room.round] = {
          'round': room.round,
          'break_out_room_guests': [
            room.guest_names
          ]
        }
      } else {
        // console.log('result', result)
        result[room.round]['break_out_room_guests'] = [...result[room.round]['break_out_room_guests'], room.guest_names]
      }

    }
    console.log('rounds of names', Object.values(result))
    setRoundsOfNames(Object.values(result));
  }

  useEffect(() => {
    // CALL here
    if (allRooms) {
      groupRoomsByRounds(allRooms)
    }

  }, [])
  return (
    <div>
      {!!roundsOfNames &&
        <form>
          {Object.values(roundsOfNames).map(({ round, break_out_room_guests }) => (
            <div>
              <h4>Round {round}</h4>

              <textarea defaultValue={break_out_room_guests.join('\r\n\r\n')} rows="15" cols="40" />


            </div>
          ))}

        </form>
      }
    </div>


  )
}
