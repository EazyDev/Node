const express = require('express');
const router =  express.Router();

router.get('/',function(req,res){
    res.send("Product's home").status(200);
});

module.exports = router;
