const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  title:{type:String, required:true},
  desc:{type:String, required:true}
})

const Posts = mongoose.model('Post', postsSchema);
module.exports = Posts;