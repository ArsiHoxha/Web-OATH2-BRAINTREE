const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const paymentRpute = require('./paymentRoute')

require('dotenv').config();
require('./auth'); // Ensure auth.js is correctly set up

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.set('trust proxy', 1);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/api',paymentRpute)

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
  })
);

app.get('/auth/google/logout', (req, res) => {
  req.session.destroy();
  res.send('See you again');
});

app.get('/auth/google/success', isLoggedIn, (req, res) => {
  console.log('User:', req.user);
  res.send('Login successful');
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Login failed');
});



app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
