import React, { useState } from 'react'
import "../App.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




export const CustomizeForm = () => {

  const [sizeOfGroups, setSizeOfGroups] = useState('');

  const [numOfRounds, setNumOfRounds] = useState('');

  const updateSizeOfGroups = (e) => {
    setSizeOfGroups(e.target.value);
  }
  const updateNumOfRounds = (e) => {
    setNumOfRounds(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log('size of groups', sizeOfGroups,  "number of rounds", numOfRounds)


      fetch('http://localhost:5050/sortation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sizeOfGroups, numOfRounds }),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          
       
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  


  return (
    <div className='form'>

      <form onSubmit={handleOnSubmit}>


       
        <br></br>
        <div>
          <label>Size of Groups?</label>
          <input
            component="input"
            type="number"
            placeholder="Total Population Size?"
            onChange={updateSizeOfGroups}
            required
          />
        </div>
        <br></br>
        <div>
          <label>How Many Rounds of Groups?</label>
          <input
            component="input"
            type="number"
            placeholder=""
            onChange={updateNumOfRounds}
            required
          />
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
