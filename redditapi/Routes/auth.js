const express = require('express');
const config = require('config');
const crypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const router = express.Router();

//Model
const User = require('../Schema/user.model');

// validation and authentication
router.post('/', [
  check('email','Please include a valid email').isEmail(),
  check('password','Please enter a valid password').exists()
], async function(request,response){

  const errors = validationResult(request);
  if(!errors.isEmpty()){
    console.log('Errors in Post');
    return response.status(400).json({errors: errors.array()});
  }

  const {email, password} = request.body;

  try {
    
    let user = await User.findOne({email});
    if(!user){
      console.log('user not found');
      return response.status(400).json({msg: 'Cannot find User with that email'});
    }
    
    
    const isMatch = await crypt.compare(password, user.password);
    if(!isMatch){
      console.log('is not a match');
      return response.status(400).json({msg: 'Password does not match'});
    }

    const payload = {
      user: {id: user.id}
    }

    jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000}, (error, token) => {
      if(error){
        throw error;
      } else{
        console.log('User has successfully logged in');
        return response.json(token)
      }
    })
  } catch (error) {
    console.error(error);
    return response.status(500).send('Server Error');
  }
})

module.exports = router;