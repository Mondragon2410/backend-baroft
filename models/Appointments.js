const { Schema, model } = require('mongoose');

const AppointmentSchema = Schema({
    
        nameClient:{
            type: String,
            required: true
        },
        serviceName: {
            type: String,
            required: true
        },
        serviceDate: {
            type: String,
            required: true
        },
        serviceHour:{
            type: String,
            required: true
        },
        nameBarber:{
            type: String,
            required: true
        },
        servicePrice:{
            type: String,
            required: true
        },
        serviceStatus:{
            type: String,
            required: true
        },
        
});

module.exports = model('Appointments',AppointmentSchema); 
