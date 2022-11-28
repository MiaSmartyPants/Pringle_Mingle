import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Papa from 'papaparse';


export const EnterNames = ({org_id}) => {

    const [file, setFile] = useState();
    const [guests, setGuests] = useState('');
    const [staff, setStaff] = useState('');
    const [eventName, setEventName] = useState('');

    const updateEventName = (e) => {
        setEventName(e.target.value.toString());
    }
    const updateGuests = (e) => {
        setGuests(e.target.value.split('\n'));
    }
    const updateStaff = (e) => {
        setStaff(e.target.value);

    }

    //for uploading files
    const OnChange = (event) => {
        Papa.parse(event.target.files[0], {
            header: false,
            skipEmptyLines: true,
            complete: function (results) {
                console.log(results.data)
                setGuests(results.data)
            },
        });
    };
    function handleOnSubmit(e) {
        e.preventDefault();
        console.log('event name', eventName, 'guests', guests)
        createEvent();
    }

    //add all names to database and event
function createEvent() {
    console.log(org_id)
    const eventsAndGuests = {
        'eventName': eventName,
        'guests' : guests,
        'org_id' : org_id
    }
    fetch('/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({eventsAndGuests}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(data)
        })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
    return (
        <div>
            <div className='popup'>
                <h3>Enter Names</h3></div>

            <form onSubmit={handleOnSubmit}>

                <div style={{color: "black"}}>
                    <label>Paste Names or Upload</label>
                    <textarea
                        name="Paste List of Names"
                        placeholder="One name per line please"
                        onChange={updateGuests}
                    />
                </div>
                <br></br>
                <div style={{color: "black"}}>
                    <label>Event Name</label>
                    <input
                        type="text"
                        placeholder="Ex: H2 2022 Mock Inteview"
                        onChange={updateEventName}
                        required
                    />
                </div>

                <br></br>
                <div style={{color: "black"}}>
                    <label>Upload CSV</label>
                    <div style={{ textAlign: "center" }}>
                        <input type={"file"} accept={".csv"} onChange={OnChange} />

                    </div>

                </div>
                <div className="buttons">
                    <button type="submit">
                        Submit
                    </button>
                </div>
                <br></br><br></br>
            </form>
        </div>
    )
}
