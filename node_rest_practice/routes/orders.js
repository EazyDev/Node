const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const orderModel = require('../models/orderModel');

router.post('/',function(req,res){
    const newOrder = new orderModel({
        _id : new mongoose.Types.ObjectId(),
        user : req.body.user,
        product : req.body.product,
        quantity : req.body.quantity
    });
});

module.exports = router;