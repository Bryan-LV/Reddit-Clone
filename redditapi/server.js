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


//Models
const User = require('./Schema/user.model');
const Posts = require('./Schema/posts.model');

// ROUTES 
// /user, /posts , /post/ , /profile
// USERS

app.get('/user', function(request,response){
  User.find().then(user => response.send(user));
})

app.post('/login', function(request,response){
  const username = request.body.username;
  const password = request.body.password;
  User.find({username: username, password:password})
    .then(res => {});
})

app.post('/signup', function(request,response){
  const name = request.body.name;
  const username = request.body.username;
  const password = request.body.password;

  const newUser = new User({
    name,
    username,
    password
  })

  newUser.save()
    .then(user => response.json(user))
    .catch(err => console.error(err));
})

// POSTS

app.get('/post', function(request,response) {
  Posts.find().then(posts => response.send(posts));
})

// make a new post
app.post('/post', function(request,response){
  const title = request.body.title;
  const desc = request.body.desc;

  const newPost = new Posts({title, desc})

  newPost.save()
    .then(post => response.json(post))
    .catch(err => console.error(err));
})


app.listen(4000, function(){
  console.log('Server running on port 4000');
})
