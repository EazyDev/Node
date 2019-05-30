const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs'); // Encryption

const userModel = require('../models/userModel');

router.get('/',function(req,res){
    res.send("User's home").status(200);
});

router.post('/',function(req,res){
    // console.log(res.body);
    // res.json(req.body).status(200);
    const newUser = new userModel({
            _id : new mongoose.Types.ObjectId(),
            name : res.body.name,
            email : res.body.email,
            password : bcryptjs.hashSync(res.body.password,10)
    });

    userModel.find({email:req.body.email})
    .exec()
    .then(users =>{
        if(users.length > 0){
            res.send("Account already exists").status(400);
        }
        else
        {
            newUser.save();
            res.send("Account Created").status(201);

        }
    })
});



module.exports = router;
