const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const orderModel = require('../models/orderModel');

//To retrieve all orders
router.get('/',function(req,res){
    
    orderModel.find()
    .populate('user','-password')
    .populate('product')
    .exec()
    .then(orders =>{
        res.json(orders).status(200);
    });
});

//To create an order 
router.post('/',function(req,res){
    const newOrder = new orderModel({
        _id : new mongoose.Types.ObjectId(),
        user : req.body.user,
        product : req.body.product,
        quantity : req.body.quantity
    });

    newOrder.save(function(err,newEntry){
        if(err)
            res.json(err).status(400);
        else
            res.json(newEntry).status(201);
    });
});



module.exports = router;