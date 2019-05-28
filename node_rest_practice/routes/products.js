const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send("Products Home - Put products here").status(200);
});

module.exports = router;