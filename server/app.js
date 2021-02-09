const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes.js');
const cars = require('./routes/cars.js');
const cookieParser = require('cookie-parser')
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
var history = require('connect-history-api-fallback');

// middleware
app.use(history());
app.use(express.static('../client/dist'));
app.use(express.static('../client/public'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// view engine
app.set('view engine', 'ejs');

// database connection
const mongoURI = 'mongodb://localhost/jwtauth'
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) console.log("error while opening the db")
})
const port = '3000'

app.listen(port, () => {
  console.log("Server started: ")
  console.log(`http://localhost:${port}`)
})
// routes
app.use(authRoutes)
app.use(cars)


// check login
app.get('/check', function (req, res, next) {

  const token = req.cookies.jwt
  //check token
  console.log("received")
  if (token) {
    jwt.verify(token, 'your secret word to sign token', (err, decodedToken) => {
      if (err) {
        console.log(err.message)
        res.json({ check: false })
      }
      else {
        console.log(decodedToken)
        res.json({ check: true })
      }
    })
  }
  else {
    //res.redirect('/login')
    res.json({ check: false })
  }

})