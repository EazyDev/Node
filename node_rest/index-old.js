const express = require('express'); //documentation check
const morgan = require('morgan'); // documentation check
const app = express();
const port = 3000;
let count = 0;

app.use(morgan('dev'));
//We add the middleware - dev is the type of data?


app.get('*',function(req,res,next){
    count++;
    next();

});
// app.get('/',function(req,res){
//    res.send("Hello World!");
// })
// if you want to see your own status code
app.get('/new',function(req,res){
    res.send('New for sure').status(200);
})

app.get('/',function(req,res){
    res.send("Hello World!").status(200);
})


app.get('/test',function(req,res){
    res.send("This is a TEST Endpoint").status(200);
})
//we send this request if the localhost:port/test is requested

app.get('/count',function(req,res){
    res.send(count.toString()).status(200);
});

app.get('*',function(req,res,next){
    count--;
    res.send('404 Not Found')
}); 
// 404 Handler , Decresases the count because any request that reaches here
// is trying to reach an endpoint not defined and therefore should not be counted.


app.listen(port,function(){
    console.log(`Server listening on ${port}`);
});
//app listens at this point for requests coming on the port