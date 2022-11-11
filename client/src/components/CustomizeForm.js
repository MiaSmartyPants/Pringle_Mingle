import React, {useState} from 'react'
import Papa from 'papaparse';
import { render } from "react-dom";
import "../App.css";




export const CustomizeForm = () => {

  const [file, setFile] = useState();
function handleOnSubmit(){
    const fileReader = new FileReader();
}
    const OnChange = (event) => {
      Papa.parse(event.target.files[0], {
        header: false,
        skipEmptyLines: true,
        complete: function (results) {
          console.log(results.data)
        },
      });
    };

  


  return (
    <div className='form'>

      <form onSubmit={handleOnSubmit}>

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
        <p style={{ color: "red" }}>OR</p>
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
          <div style={{ textAlign: "center" }}>
            <h1>REACTJS CSV IMPORT EXAMPLE </h1>
            
                <input type={"file"} accept={".csv"} onChange={OnChange}/>
           
        </div>
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
