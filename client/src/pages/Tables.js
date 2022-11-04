import React from "react";
import '../App.css';
import { TableOfNames } from "../components/TableOfNames";
export default function Tables({data}) {
    if(!data){
        return null;
    }

    // const [allNames, setAllNames] = useState();

    // async function getData() {
    //   // await fetch("http://localhost:5050/")
      
    //   .then((response) => response)
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((data)=> {
    //     console.log("data", data)
    //     setAllNames(data)

    //   })
    //  } 
       
    //    useEffect(() => {
    //   // CALL here
    //    getData() 
    //    },[])
  
    console.log(data);
  return (
    <div >
       <h1>{data.Header}</h1>
<TableOfNames data={data}/>
      
  
    </div>
  );
}