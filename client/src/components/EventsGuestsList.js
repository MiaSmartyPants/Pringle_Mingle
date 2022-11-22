
import React, {useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CustomizeForm } from './CustomizeForm';


export const EventsGuestsList = ({ result }) => {
  const [eventId, setEventId] = useState();

if (result === undefined || result == null) {
  throw new Error();
}

//console.log(result[0].event_name, result.guest_names)


 const updateEventId = ({id}) => {
  console.log('key', id)
  //seteventId(key)
}




  return (
    <div>

      {Object.values(result).map(({id, event_name, guest_names}) => (

        <div>
      
           <h3>{event_name}</h3>
            
          <div>
        
              
      



            <table class="styled-table">
              <thead>
             
                <tr>

                  <th>Name</th>
                 

                </tr>
              </thead>

              <tbody>
                {guest_names.map((guest) => (
                  <tr key={id}>
                    <td>{guest}</td> 
                     <td />
                  </tr>
                 ))}  
              </tbody>
            </table>
            <Popup trigger={<button onClick={updateEventId}>Create Groups</button>} position="right center">
              <div>Customize Your Rooms</div>
              <CustomizeForm  />
            </Popup>
            <br></br><br></br><br></br> <br></br><br></br><br></br>
          </div></div>
      ))}
      <br></br><br></br><br></br> <br></br><br></br><br></br>
    </div>
  )
}

