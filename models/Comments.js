const { Schema, model } = require('mongoose');

const CommentSchema = Schema({
    
        nameClient:{
            type: String,
            required: true
        },
        serviceName: {
            type: String,
            required: true
        },
        serviceType: {
            type: String,
            required: true
        },
       serviceComments:{
            type: String,
            required: true
        },
        
});

module.exports = model('Comments-ratings',CommentSchema); 
