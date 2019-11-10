const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');
const crypt = require('bcrypt');
const {check, validationResult} = require('express-validator');
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

app.post('/signup', [
  check('name', 'Please enter your name').not().isEmpty(),
  check('email', 'Please enter valid email').isEmail(),
  check('password','Please enter a password 6 characters or more').isLength({ min:6 })
], async function(request,response){
      const errors = validationResult(request);
      
      // check if errors exist
      if(!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()});
      }


      const { name, username, email, password, bio } = request.body;

      try {
        // check if email exists
        let user = await User.findOne({email});
        if(user){
          return response.status(400).json({msg: 'This user already exists'})
        }

        user = new User({
          name,
          email,
          username,
          password,
          bio
        })

        // Hash the password
        const salt = await crypt.genSalt(10);
        user.password = await crypt.hash(password, salt);

        await user.save()
        response.send('New User saved to DB');

      } catch (error) {
        console.error(error.message);
        response.status(500).send('Ohh, this is a little embarrassing...')
      }
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
