const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    User :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    Product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : true
    },
    quantity : {
        type:Number,
        default : 1
    },
    time : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Order',orderSchema);