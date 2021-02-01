const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes.js');
const cookieParser = require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/authMiddleware.js')
const app = express();
const cors = require("cors");


// middleware
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
//mongodb+srv://<username>:<password>@clustername.mongodb.net/<dbname>
const dbURI = 'mongodb+srv://<username>:<password>@clustername.mongodb.net/<dbname>';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser)
app.get('/', (req, res) => res.render('home'));
app.get('/cars', requireAuth, (req, res) => res.render('cars'));
app.use(authRoutes)


// check login
app.get('/check', function (req, res, next) {

  const token = req.cookies.jwt
  //check token
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