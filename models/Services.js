const { Schema, model } = require('mongoose');

const ServiceSchema = Schema({
    
        serviceName: {
            type: String,
            required: true
        },
        serviceType: {
            type: String,
            required: true
        },
       servicePrice:{
            type: String,
            required: true
        },
        serviceTime:
        {
            type: String,
            required: true
        },
        
});

module.exports = model('list-services',ServiceSchema); //nombre en la bd list-services
