import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Papa from 'papaparse';

export const EnterNames = () => {

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
        console.log('event name', eventName, 'staf ?', staff, 'guests', guests)

    }

    return (
        <div>
            <div>EnterNames</div>

            <form onSubmit={handleOnSubmit}>

                <div>
                    <label>Names</label>
                    <textarea
                        name="Paste List of Names"
                        placeholder="Paste List of Names"
                        onChange={updateGuests}
                    />
                </div>
                <br></br>
                <div>
                    <label>Event Name</label>
                    <input
                        type="text"
                        placeholder="What should this table be called?"
                        onChange={updateEventName}
                        required
                    />
                </div>

                <br></br>
                <div>
                    <label>Upload Names</label>
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
