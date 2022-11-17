import { eventNames } from 'process'
import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CustomizeForm } from './CustomizeForm';

export const EventsGuestsList = ({ result }) => {
  
if (result === undefined || result == null) {
  throw new Error();
}

//console.log(result[0].event_name, result.guest_names)




  return (
    <div>

      {Object.values(result).map((event, index) => (

        <div>
      
              {/* <title>{event.event_name}</title> */}
            
          <div>
        
              
      



            <table class="styled-table">
              <thead>
             
                <tr>

                  <th>Name</th>
                  <th>Delete</th>

                </tr>
              </thead>

              <tbody>
                {event.guest_names.map((guest) => (
                  <tr key={event}>
                    <td>{guest}</td> 
                    {/* <td>{item.lastName}</td>  this will be for the edit button */}
                     <td />
                  </tr>
                 ))}  
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

