const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'final_project',
  password: 'password',
  port: 5432,
})

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

  //post admin if signed up
  const postAdmin = (request, response) => {
  
    const { name, email} = request.body; 
    console.log(request.body)
  //insert into name email, ord_id and orgName into organization table
    pool.query('INSERT INTO admin (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        console.log(error)
        return response.json(error.detail);
      }
      response.status(200).json(results.rows)
    })
  }
//put request
const updateAdmin = (request, response) => {
  const email = (request.params.email)
  const { org_id } = request.body

  pool.query(
    'UPDATE admin SET org_id = $1 WHERE email = $2',
    [org_id, email],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${email}`)
    }
  )
}

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

  //select all guests that belong to company
  const getGuestsById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM guests WHERE org_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  // add guests with auto org assignment
 
 
 
 
  /**** Events Queries *****/

//select all events that belong to company
const getEventsById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM events WHERE org_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//select all guests that belong to event

//post guest to events

// put guest to event

//delete guest in event






/**** Breakout Room Queries *****/

//select all room that belong to event
const getRoomsById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM rooms WHERE event_id = $1', [id], (error, results) => {
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
  const { org_name} = request.body; 
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


  module.exports = {
  
    getAdmin,
    getAdminById,
    getGuests,
    getGuestsById,
    getEventsById,
    getRoomsById,
    getAllOrgs,
    getOrgByName,
    postAdmin,
    postOrg,
    updateAdmin
  }