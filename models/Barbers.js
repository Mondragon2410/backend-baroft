const { Schema, model } = require('mongoose');

const BarbersSchema = Schema({
    
       /*  img: {
        type: String,
        required: false

        }, */
        name: {
            type: String,
            required: true
        },
        barberType: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        phone:
        {
            type: String,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        userCode: {
            type: String,
            required: true
        },
});

module.exports = model('Barbers',BarbersSchema);
