
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
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

app.get('/', (req, res) => {
    console.log("server");
     res.send("this will be data")
     res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
   })



   app.get('/admin', db.getAdmin)
   app.get('/admin/:id', db.getAdminById)
   app.get('/adminemail/:email', db.getAdminByEmail)
   app.get('/guests', db.getGuests)
   app.get('/guests/:id', db.getGuestById)
   app.get('/events/:orgid', db.getEventsByOrgId)
   app.get('/rooms/:id', db.getRoomsByEventId)
   app.get('/organizations', db.getAllOrgs)
   app.get('/organizations/:orgname', db.getOrgByName)


   app.post('/admin/', db.postAdmin)
   app.post('/organizations/', db.postOrg)

   
   app.put('/adminemail/:email', db.updateAdminByEmail)



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })