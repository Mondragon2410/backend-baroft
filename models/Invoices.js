const { Schema, model } = require('mongoose');

const InvoiceSchema = Schema({
    
        barbershopName: {
            type: String,
            required: true
        },
        barbershopAddress: {
            type: String,
            required: true
        },
        serviceType:{
            type: String,
            required: true
        },
        serviceTime:
        {
            type: String,
            required: true
        },
        servicePrice:
        {
            type: String,
            required: true
        },
        barberCode:
        {
            type: String,
            required: true
        },
        send:
        {
            type: String,
            
        },
        recibed:
        {
            type: String,
            
        }
       
        
});

module.exports = model('Invoices',InvoiceSchema); 
