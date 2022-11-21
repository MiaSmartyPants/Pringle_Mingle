

const {Pool, Client} = require('pg')
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'final_project',
  password: 'password',
  port: 5432,
})
const client = new Client({
  user: 'me',
  host: 'localhost',
  database: 'final_project',
  password: 'password',
  port: 5432,
})
client.connect()



/***** Admin Queries *****/

//select all admin
const getAdmin = (request, response) => {
  pool.query('SELECT * FROM admin ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//select all admin that belongs to company
const getAdminById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM admin WHERE org_id= $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//get admin by email
const getAdminByEmail = (request, response) => {
  const email = (request.params.email)
  console.log(email)
  pool.query("SELECT * FROM admin WHERE email = $1 ", [email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//post admin if signed up
const postAdmin = (request, response) => {
  const { name, email } = request.body;


  pool.query('INSERT INTO admin (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      console.log(error)
      return response.json(error.detail);
    }
    response.status(200).json(results.rows)
  })
}

//post admin with org id from send invite
const postAdminAndOrgId = (request, response) => {

  const org_id = parseInt(request.body.data);
  console.log(request.body)
  const { name, email } = request.body;
  pool.query('INSERT INTO admin (name, email, org_id) VALUES ($1, $2, $3) RETURNING *', [name, email, org_id], (error, results) => {
    if (error) {
      console.log(error)
      return response.json(error.detail);
    }
    response.status(200).json(results.rows)
  })
}


//put request to uodate admin with org id
const updateAdminByEmail = (request, response) => {
  const email = (request.params.email)
  const { org_id } = request.body
  console.log(email, ':', org_id)
  pool.query('UPDATE admin SET org_id = $1 WHERE email = $2',
    [org_id, email],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${email}`)
    }
  )
}
// const updateAdminByEmail = (request, response) => {
//   const email = (request.params.email)
//   const { org_id } = request.body

//   pool.query(
//     'UPDATE admin SET org_id = $1 WHERE email = $2',
//     [org_id, email],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${email}`)
//     }
//   )
// }




/**** Guest queries *****/

//select all guests
const getGuests = (request, response) => {
  pool.query('SELECT * FROM guests ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//select geuests by id
const getGuestById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM guests WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


// post guests with from creating table
const postGuests = (request, response) => {

  console.log(request.body)

}




/**** Events Queries *****/

//select all events that belong to company
const getEventsByOrgId = (request, response) => {
  const orgid = parseInt(request.params.orgid)
  console.log(orgid)

  pool.query('SELECT e.id, e.event_name, e.org_id, g.id as guest_id, g.name as guest_name FROM events as e JOIN guests as g on g.id = any(e.guest_ids) WHERE e.org_id = $1;', [orgid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
//posts event guests if not already present, and then posts the event name and guest ids into event table
//post guest to events
const postEvent = async (request, response) => {
  const eventName = request.body.eventsAndGuests.eventName;
  const guestsNames = request.body.eventsAndGuests.guests;
  const org_id = parseInt(request.body.eventsAndGuests.org_id);
  //console.log(request.body.eventsAndGuests)
  const guestIds = [];
  let guestId = undefined;
  try {
    for (let i = 0; i < guestsNames.length; i++) {

      let results = await pool.query('SELECT * FROM guests WHERE name = $1', [guestsNames[i]])
      if (results.rows.length == 0) {
        results = await pool.query('INSERT INTO guests (name, org_id) VALUES ($1,$2) RETURNING *', [guestsNames[i], org_id])
      }
      guestId = results.rows[0].id
      guestIds.push(guestId)
    }
    await pool.query('INSERT INTO events (event_name, org_id,  guest_ids) VALUES ($1, $2, $3) RETURNING *', [eventName, org_id, guestIds])

  } catch (error) {
    console.log(error)
  }

  // pool.query('SELECT * FROM guests WHERE name = $1', [guestsNames[i]], (error, results) => {
  //   if (results.rows.length == 0) {
  //     pool.query('INSERT INTO guests (name, org_id) VALUES ($1,$2) RETURNING *', [guestsNames[i], org_id], (error, results) => {

  //       if (error) {
  //         console.log(error)
  //       }
  //       guestId = results.rows[0].id
  //     })
  //   }else{
  //     guestId = results.rows[0].id
  //   }
  // })
  // pool.query('SELECT id FROM guests WHERE name = $1', [guestsNames[i]], (error, results) => {
  //   console.log(results.rows[0].id)
  //   if (error) {
  //     console.log(error)
  //   }

  //   guestIds.push(results.rows[0].id)
  //   console.log(guestIds)
  //   console.log(guestIds.length, guestsNames.length)
  //   if (guestIds.length == guestsNames.length) {
  //     console.log('events', guestIds)
  //     pool.query('INSERT INTO events (event_name, org_id,  guest_ids) VALUES ($1, $2, $3) RETURNING *', [eventName, org_id, guestIds], (error, results) => {
  //       if (error) {
  //         console.log(error)
  //       }

  //     })
  //   }
  // })


}



/**** Breakout Room Queries *****/

//select all rooms and names that belong to event
const getRoomsByEventId = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT r.id, r.room, r.event_id, r.round, g.name as guest_name FROM rooms as r JOIN guests as g on g.id = ANY(r.guest_ids) WHERE r.event_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
//select all names that belongs to room $1



/*** Organization Queries ****/

//post org
const postOrg = (request, response) => {
  const { org_name } = request.body;
  console.log(request.body)
  pool.query('INSERT INTO organizations (org_name) VALUES ($1) RETURNING *', [org_name], (error, results) => {
    if (error) {
      console.log(error)
      return response.json(error.detail);
    }
    response.status(200).json(results.rows)
  })
}

//select all orgs
const getAllOrgs = (request, response) => {
  pool.query('SELECT * FROM organizations ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//select org where name =$1
const getOrgByName = (request, response) => {
  const org_name = (request.params.orgname)
  console.log(org_name)
  pool.query("SELECT * FROM organizations WHERE org_name = $1 ", [org_name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}










//sorting function
//select guests by event id

const getGuestsByEventId = async (request) => {
 
  //const id = (request.body.event_id)
  const id = 1;

  const text = 'SELECT  g.name as guest_name FROM events as e JOIN guests as g on g.id = any(e.guest_ids) WHERE e.id = $1'
  const values = [id];
 let  guestsIdsFromEvent = [];
  // callback
  client.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack)
    }
  })
  // promise
  client
    .query(text, values)
    .then(res => {
      //console.log(res.rows)
      guestsIdsFromEvent = res.rows;
      //console.log('this is the guests ids',  guestsIdsFromEvent)
      return guestsIdsFromEvent;
    })
    try {
      const res = await client.query(text, values)
      // console.log(res.rows)

    } catch (err) {
      console.log(err.stack)
    }
 
    console.log('returned values',  guestsIdsFromEvent)
let items = [];
guestsIdsFromEvent.map( (name) => {
items.push(name.guest_name);
})

    const groupSize = parseInt(request.body.sizeOfGroups)
    const numOfRounds = parseInt(request.body.numOfRounds)
console.log('before sortation', items)


const metWith = {};
for (let i = 0; i < items.length; i++) {
  metWith[items[i]] = {};
  for (let j = 0; j < items.length; j++) {
    if (i !== j) {
      metWith[items[i]][items[j]] = 0;
    }
  }
}
//
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function computeGroups() {
  const result = [];
  let currentGroup = [];

  const workingSet = [...items];
  shuffleArray(workingSet);

  const addCurrentGroup = () => {
    result.push(currentGroup);
    for (let i = 0; i < currentGroup.length; i++) {
      for (let j = 0; j < currentGroup.length; j++) {
        if (i !== j) {
          metWith[currentGroup[i]][currentGroup[j]]++;
          // metWith[currentGroup[j]][currentGroup[i]]++;
        }
      }
    }
    // console.log('currentGroup', currentGroup);
    currentGroup = [];
  }

  const addItem = (item) => {
    console.assert(item !== undefined);
    if (item === undefined) {
      const error = new Error();
      console.log(error.stack);
    }
    // console.log('item', item, 'workingSet', workingSet);
    currentGroup.push(item);
    workingSet.splice(workingSet.indexOf(item), 1);
    // console.log('item', item, 'workingSet', workingSet);
  }

  while (workingSet.length > 0) {
    // const item = workingSet.pop();
    // currentGroup.push(item);

    console.assert(currentGroup.length === 0);

    let bestPair = [];
    let bestValue = Infinity;
    for (let i = 0; i < workingSet.length; i++) {
      for (let j = 0; j < workingSet.length; j++) {
        if (i === j) continue;
        const value = metWith[workingSet[i]][workingSet[j]];
        if (value < bestValue) {
          bestPair = [i, j];
          bestValue = value;
        }
      }
    }

    // console.log(bestPair, bestValue, workingSet.length);
    if (bestPair.length === 2) {
      const a = workingSet[bestPair[0]];
      const b = workingSet[bestPair[1]];
      
      addItem(a);
      addItem(b);
    } else {
      addItem(workingSet[0]);
    }

    while (currentGroup.length < groupSize && workingSet.length > 0) {
      const candidates = [...workingSet];

      const score = (item) => {
        let value = 0;
        for (const otherItem of currentGroup) {
          value += metWith[item][otherItem];
        }
        return value;
      }
      
      candidates.sort((a, b) => {
        return score(a) - score(b);
      });

      const choice = candidates[0];
      addItem(choice);
    }

    if (currentGroup.length === groupSize) {
      addCurrentGroup();
    }
  }

  if (currentGroup.length > 0) {
    addCurrentGroup();
  }

  return result;
}

for (let i = 0; i < numOfRounds; i++) {
  const groups = computeGroups();
  console.log('===');
  console.log(groups);
  console.log('===');
}

console.log(metWith);

}



module.exports = {

  getAdmin,
  getAdminById,
  getAdminByEmail,
  getGuests,
  getGuestById,
  getEventsByOrgId,
  getRoomsByEventId,
  getAllOrgs,
  getOrgByName,
  postAdmin,
  postAdminAndOrgId,
  postEvent,
  postGuests,
  postOrg,
  updateAdminByEmail,
  getGuestsByEventId,


}