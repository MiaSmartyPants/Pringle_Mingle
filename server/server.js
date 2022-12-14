
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config();
const db = require('./queries')
const cors = require('cors')
const path = require('path');
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(REACT_BUILD_DIR));
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/test', (req, res) => {
  console.log("server");
  res.send("this will be data")
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
})


const sortation =   (request) => {
  const sizeOfGroups = (request.body.sizeOfGroups)
  const numOfRounds = (request.body.numOfRounds)
  const event_id = 1;
  //function to get all guests_ids by event id
  const GuestByEventId =  db.getGuestsByEventId({event_id})//variable and this will be the return info
  console.log(sizeOfGroups, numOfRounds, GuestByEventId)
  testing({GuestByEventId});
}

function testing({GuestByEventId}){
  console.log('testing', GuestByEventId)
}

app.get('/admin', db.getAdmin)


app.get('/admin/:id', db.getAdminById)
app.get('/adminemail/:email', db.getAdminByEmail)
app.get('/guests', db.getGuests)
app.get('/guests/:id', db.getGuestById)
app.get('/events/:orgid', db.getEventsByOrgId)
app.get('/eventlist/:orgid', db.getEventList)
app.get('/rooms/:id', db.getRoomsByEventId)
app.get('/organizations', db.getAllOrgs)
app.get('/organizations/:orgname', db.getOrgByName)
//app.get('/eventguests/:eventid', db.getGuestsByEventId)

app.post('/adminorgid/', db.postAdminAndOrgId)
app.post('/admin', db.postAdmin)
app.post('/organizations/', db.postOrg)
app.post('/event', db.postEvent)
app.post('/sortation', db.sortation)

app.put('/adminupdate/:email', db.updateAdminByEmail)
//app.delete('/event/', db.deleteEvent)



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})