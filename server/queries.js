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

//select org where id =$1

  module.exports = {
  
    getAdmin,
    getAdminById,
    getGuests,
    getGuestsById,
    getEventsById,
    getRoomsById
  }