const express = require('express');
const router =  express.Router();
const mongoose = require('mongoose');

const productModel = require('../models/productModel');
router.get('/',function(req,res){
    res.send("Product's home").status(200);
});

router.post('/',function(req,res){
    const newProduct = new productModel({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    })

    productModel.find({email : req.body.name})
    .exec()
    .then(product => {
        if(product.length > 0)
        {
            res.send("Product already exists").status(400);
        }
        else
        {
            newProduct.save();
            res.send("Product Created").status(201);
        }
    });
});

module.exports = router;
