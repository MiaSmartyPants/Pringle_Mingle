import React from "react";
import '../App.css';
import { TableOfNames } from "../components/TableOfNames";
export default function Tables({data}) {
    if(!data){
        return null;
    }
//after isAuthenticated - landing page asks to insert org name...then 
//post request - user is stored in databse with company id & name (duplication validation)
//pass orgId input to tables and groups as some'global' variable
// fecth data is called to get events with  with orgid
    // const [allNames, setAllNames] = useState();

    // async function getData() {
    //   // await fetch("http://localhost:5050/") //enter endpoint for event that belong to company id
      
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