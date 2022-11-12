import React, { useState } from 'react'
import "../App.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




export const CustomizeForm = () => {

  const [sizeOFGroups, setSizeOfGroups] = useState('');

  const updateSizeOfGroups = (e) => {
    setSizeOfGroups(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log('size of groups', sizeOFGroups)

  }


  return (
    <div className='form'>

      <form onSubmit={handleOnSubmit}>


       
        <br></br>
        <div>
          <label>Size of Groups</label>
          <input
            component="input"
            type="number"
            placeholder="Total Population Size?"
            onChange={updateSizeOfGroups}
            required
          />
        </div>
        <br></br>
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
