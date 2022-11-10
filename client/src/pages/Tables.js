import React, {useState, useEffect} from "react";
import { FaSort } from "react-icons/fa";
import '../App.css';

import { TableOfNames } from "../components/TableOfNames";




export default function Tables({data}) {
  
    // if(!data){
    //     return null;
    // }
    //how to sort objects
    const [eventData, setEventData] = useState();


//call function to retirve event guests
//for each guests retrieved, push theyre pairing into object


function createRooms(){


    const eventGuests = [1,3,4,17]
    let sizeOfGroup = 2;
    let numOfGroups = Math.ceil(eventGuests.length/sizeOfGroup)
    let allRooms =[]
     
    let adjacencyMatrix = {}
    let currentRoom = 0;
   
    
//useEffect each time counter changes(increments) call below function and increment counter after each size of group is met
while(currentRoom < numOfGroups){
//for(let  =0,)
  let tempRoom = [];
  let offSet = currentRoom * sizeOfGroup;
  let counter = 0;
    while (counter < sizeOfGroup){
    tempRoom.push(eventGuests[offSet])//sortedGuests[offSet]
      offSet++;
      counter ++;
  
    }

    allRooms.push(tempRoom)
    currentRoom++;
   

     adjacencyMatrix = {}


    //store breakoutrooms from allRooms
//each time the counter is hit, call the insert into function and store adjacencyMatrix
  }
  
  console.log('allRooms;',allRooms)
  console.log(adjacencyMatrix)

}

function sort(){
  //assure least duplications in a rooom
      //before we assign guests to a room we have to sort them from least met to most met
          // instead of the eventGuests[] we can use sortedGuest["the guest id's in a sorted order from least met to most met"]
      //look up eventguests' id
      //take those ids to format in a large adjacency matrix
      //go through(filter) each object/set thing 
            //if partner of guest is not present in eventGuests - dlete currenct object/set thing
      //sort from most occurences to least
      //look up first eventGuest and second
            //if there is no match then put them in sortedGuests[]
            //remove them from largeAdjacencyMatrix and all occurences
            //if there is match 
            //repeat proccess for second with third and then so on...
      //filter LargeAdjacencyMatrix to not include whats currently in sortedGuests[]
      //push the sortedLargeAdjacency keys into sortedGuests
//after removing all that has been paired, sort each guests' occurence(object/set thing) value from least to greatest
//the first guest's and their partner will be matched
//ex:
 //ex:1
    // {1:{3:2}, 3:{1:2}, 4:{17:1}, 17:{4:1}, 5:{13:1}, 13:{17:1}, 13:{5:1}, }
    //{4:{17:1}, 17:{4:1}, 5:{13:1}, 13:{17:1}, 13:{5:1}, 1:{3:2}, 3:{1:2}}
   // {4:{17:1},  3:{1:2}}
    //[17, 5, 13, 1, 4, 3]
//ex:2
// {1:{3:2}, 1:{4:6}, 2:{1:2}, 3:{1:2}, 4:{17:1}, 17:{4:1}, 5:{13:2}, 13:{17:1}, 13:{5:2}, }
// {4:{17:1}, 17:{4:1}, 13:{17:1}, 1:{3:2}, 1:{2:2}, 2:{1:2},  3:{1:2}, 5:{13:2}, 13:{5:2},  1:{4:6} 4:{1:6},  }
//{ 17:{4:1},   2:{1:2},  3:{1:2},     }//
//[4,13, 1,5, 3, 2, 17 ]

//ex:3
//{1:{3:2}, 1:{4:6}, 2:{1:2}, 3:{1:2}, 4:{17:1}, 17:{4:1}, 5:{13:2}, 13:{17:1}, 13:{5:2}, }
// {4:{17:1}, 17:{4:1}, 13:{17:1}, 1:{3:2}, 1:{2:2}, 2:{1:2},  3:{1:2}, 5:{13:2}, 13:{5:2},  1:{4:6} 4:{1:6}}
// [ , ,  3:{1:2},  }
//[4,13,2   ,17,1,5,  3 ]
}











 

    // fecth data is called to get events with  with orgid
  

    // async function getData() {
    //   await fetch("http://localhost:5050/${org_id}") //enter endpoint for event that belong to company id
      
    //   .then((response) => response)
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((data)=> {
    //     console.log("data", data)
    //     eventData(data)

    //   })
    //  } 
       
    //    useEffect(() => {
    //   // CALL here
    //   //  getData() 
    //   //  console.log(org_id)
    //    },[])
  
   
  return (
    <div >
       <h1>{data.Header}</h1>
<TableOfNames data={data}/>
      <button onClick={createRooms}>create breakout rooms</button>
  
    </div>
  );
}