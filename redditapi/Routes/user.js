const express = require('express');
const config = require('config');
const crypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const router = express.Router();


//Model
const User = require('../Schema/user.model');

router.post('/', [
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

        const payload = {
          user: {
            id: user.id
          }
        }
        
        // create json web token
        jwt.sign(payload,config.get('jwtSecret'), {
          expiresIn: 36000
        }, (err, token) => {
          if (err){
            throw err
          }
          response.json({token});
        })

      } catch (error) {
        console.error(error.message);
        response.status(500).send('Ohh, this is a little embarrassing...')
      }
})

module.exports = router;