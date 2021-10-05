const { Schema, model } = require('mongoose');

const CalendarSchema = Schema({
    
        userCode:{
            type: String,
            required: true
        },
        barberCode: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        stateSend:{
            type: Boolean,
            required: true
        }
        
});

module.exports = model('Calendar',CalendarSchema); 