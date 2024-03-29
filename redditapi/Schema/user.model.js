const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{type: String, required: true},
  email:{type:String, required:true, unique:true},
  username:{type: String, require:true},
  password:{type:String, require:true},
  bio:{type:String, require:true}
})

const User = mongoose.model('Users', userSchema);
module.exports = User;