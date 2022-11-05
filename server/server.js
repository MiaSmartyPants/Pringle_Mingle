
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5050;
const cors = require('cors')


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
   })



   app.get('/admin', db.getAdmin)
   app.get('/admin/:id', db.getAdminById)
   app.get('/guests', db.getGuests)
   app.get('/guests/:id', db.getGuestsById)
   app.get('/events/:id', db.getEventsById)
   app.get('/rooms/:id', db.getRoomsById)



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })