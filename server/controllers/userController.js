const User = require('../models/user')
const jwt = require('jsonwebtoken')

//post user(Create user database)
const CreateUser = async (req, res) => {
    try {
        const { fname, lname, email, phone_number, password, role, gender, dob } = req.body;

        
        // Check if email is already taken
        const emailexist = await User.findOne({ email });
        if (emailexist) {
            return res.json({
                error: 'Email is already taken'
            });
        }

        // check if number is already taken
        const phoneexist = await User.findOne({phone_number});
        if (phoneexist) {
            return res.json({
                error: 'Phone number is already taken'
            });
        }

        //create database
        const newUser = new User({
            fname,  
            lname, 
            email, 
            phone_number,
            password, 
            role,
            gender,
            dob
        })
        //save the user to database
        const newUserItem = await newUser.save();

        //send successful message
        res.status(200).json({
            message: 'USER ADDED SUCCESSFULLY',
            data: newUserItem
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Internel server error'});
    }
}



//get all user data
module.exports = {
    CreateUser,
   
}