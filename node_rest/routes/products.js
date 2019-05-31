const express = require('express');
const router =  express.Router();
const mongoose = require('mongoose');

const productModel = require('../models/productModel');

//To get all products
router.get('/',function(req,res){
    // res.send("Product's home").status(200);
    productModel.find()
    .exec()
    .then(allproducts => {
        res.json(allproducts).status(200);
    })
});

//To get product by ProductID
router.get('/:productID',function(req,res){
    const id = req.params.productID;
    productModel.findById(id)
    .exec()
    .then(product => {
        res.json(product).status(200);
    })
})

//To delete product by productID
router.delete('/:productID',function(req,res){
    const id = req.params.productID;
    productModel.deleteOne({_id:id})
    .exec()
    .then(data => {
        res.json(data).status(200);
    })
});

//To create product.
router.post('/',function(req,res){
    const newProduct = new productModel({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    })

    newProduct.save(function(err,newEntry){
        if(err)
            res.json(err).status(400);
        else
            res.json(newEntry).status(201);
    });

    // productModel.find({name : req.body.name})
    // .exec()
    // .then(product => {
    //     if(product.length > 0)
    //     {
    //         res.send("Product already exists").status(400);
    //     }
    //     else
    //     {
    //         newProduct.save();
    //         res.send("Product Created").status(201);
    //     }
    // });
});

//To update the deets of a product 
router.put('/:productID',function(req,res){
    const id = req.params.productID;
    const newPrice = req.body.price;
    productModel.updateOne({_id:id},{$set:{price:newPrice}})
    .exec()
    .then(data => {
        res.json(data).status(200);
    })
});

module.exports = router;
