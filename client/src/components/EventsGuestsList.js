import { eventNames } from 'process'
import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CustomizeForm } from './CustomizeForm';

export const EventsGuestsList = ({ data }) => {
  // if(data.length == 0){
  //   return null;
  // }

  console.log('events for tableofNames', data)





  //  item.guest_ids.map((index) => {
  // console.log(index)//fetch request for selct participant by id
  // })//map through id for guests




  return (
    <div>

      {data.map((event) => (


        <div>
          <div>
            <div>{event.event_name}</div>



            <table class="styled-table">
              <thead>
                <tr>

                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>

                </tr>
              </thead>

              <tbody>
                {/* {data.guest_id.map((guest) => ( */}
                  <tr key={event}>
                    <td>{event.guest_name}</td>
                    {/* <td>{item.lastName}</td>  this will be for the edit button */}

                    <td />
                  </tr>
                {/* ))} */}
              </tbody>
            </table>
            <Popup trigger={<button>Create Groups</button>} position="right center">
              <div>Customize Your Rooms</div>
              <CustomizeForm />
            </Popup>
            <button>Add Guest</button>

          </div></div>
      ))}
      <br></br><br></br><br></br> <br></br><br></br><br></br>
    </div>
  )
}

