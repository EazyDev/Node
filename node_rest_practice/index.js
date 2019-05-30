const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Salman:qwerty123@victorcluster-6cqju.mongodb.net/test?retryWrites=true",function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Atlas is connected");
    }
});


const users = require('./routes/users');
const products = require('./routes/products');



app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();
});

app.use('/users',users);
app.use('/products',products);

app.listen(port,function(){
    console.log(`Server listening on ${port}`);
});