const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');
const app = express();

// middleware 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// connect to database
const db = config.get('mongoURI');
mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once('open', () => console.log('Database has connected'));


// Users
app.use('/signup', require('./Routes/user'))
app.use('/auth', require('./Routes/auth'))

app.get('/user', function(request,response){
  User.find().then(user => response.send(user));
})


// POSTS
app.use('/post', require('./Routes/post'))


app.listen(4000, function(){
  console.log('Server running on port 4000');
})
