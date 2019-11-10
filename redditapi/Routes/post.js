const express = require('express');
const router = express.Router();

const Posts = require('../Schema/posts.model');


router.get('/post', function(request,response) {
  Posts.find().then(posts => response.send(posts));
})

// make a new post
router.post('/post', function(request,response){
  const title = request.body.title;
  const desc = request.body.desc;

  const newPost = new Posts({title, desc})

  newPost.save()
    .then(post => response.json(post))
    .catch(err => console.error(err));
})

module.exports = router;