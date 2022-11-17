import React from 'react'

export const GroupsOfNames = ({ org_id,eventNames }) => {
  console.log('GroupofNames org id:', org_id)

  //show tables for only whats selected
  // if groups have not been made
  //display sorry create grous here

  //funtion to reformat the data
    // function f(events) {
  //   if (events === undefined || events === null) {
  //     throw new Error();
  //   }
  //   const result = {};
  //   for (const item of events) {
  //       if (!(item.id in result)) {
  //           result[item.id] = {
  //               'event_name': item.event_name,
  //               'guest_names': [],
  //           }
  //       }
  //       const obj = result[item.id];
  //       obj['guest_names'].push(item.guest_name);
  //   }
  //   console.log(result)
  //   setResult(result);
  //  }

  return (
    <div>

    </div>


  )
}
