import React from 'react'

import { render } from "react-dom";
import "../App.css";




export const CustomizeForm = () => {


    
    const handleSubmit = (Event) => {
      Event.preventDefault();
     console.log('call prop function of customize to send to database')
    };


  return (
<div className='form'>
   
        <form onSubmit={handleSubmit}>
          


              <div>
                <label>Names</label>
                <input
                  name="Paste List of Names"
                  type="text"
                  placeholder="Paste List of Names"
                />
              </div>
               <div>
                <label>Volunteers/Staff (optional)</label>
                <input
                  name="Paste List of Names"
                  component="input"
                  type="text"
                  placeholder="Paste List of Names"
                />
              </div>
            <div>
                <label>Size of Groups</label>
                <input
                  component="input"
                  type="number"
                  placeholder="Total Population Size?"
                />
              </div>
            <p style={{color: "red"}}>OR</p>
              <div>
                <label>Number of Groups</label>
                <input
                  component="input"
                  type="number"
                  placeholder="How Many Groups?"
                />
              </div>
             
              <div>
                <label>Event Name</label>
                <input
                  type="text"
                  placeholder="What should this table be called?"
                />
              </div>
              <div>
                <label>Upload Names</label>
                <input name="notes" component="textarea" type="file" placeholder="CVS Only" />
              </div>
              <div className="buttons">
                <button type="submit">
                  Submit
                </button>
                <button
                  type="button"
                //   onClick={reset}
                 
                >
                  Reset
                </button>
              </div> 
          
            </form>
         
            </div>


  )
}
