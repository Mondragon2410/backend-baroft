const Invoice = require('../models/Invoices');
const invoices = {};





invoices.getInvoices =  async(req, res) => {  
    
    const invoices = await Invoice.find();
    res.json(invoices);
        
}

invoices.createInvoice =  async (req, res) =>{
    const invoice = new Invoice({
        barbershopName: req.body.barbershopName,
        barbershopAddress: req.body.barbershopAddress,
        serviceType: req.body.serviceType,
        serviceTime: req.body.serviceTime,
        servicePrice: req.body.servicePrice,
        barberCode: req.body.barberCode,
        send: req.body.send,
        recibed: req.body.recibed,
        
    });
    await invoice.save();
    res.json({
        'status': 'Factura guardada'});

} 

invoices.getInvoice = async (req, res) =>{
    const invoice = await Invoice.findById(req.params.id);
    res.json(invoice);

} 

invoices.editInvoice = async (req, res) =>{

    const {id} = req.params;
    const invoice = {
        barbershopName: req.body.barbershopName,
        barbershopAddress: req.body.barbershopAddress,
        serviceType: req.body.serviceType,
        serviceTime: req.body.serviceTime,
        servicePrice: req.body.servicePrice,
        barberCode: req.body.barberCode,
        send: req.body.send,
        recibed: req.body.recibed,
        
        
    };
    await Invoice.findByIdAndUpdate(id, {$set: invoice}, {new: true})
    res.json({status: 'Factura actualizada'});

} 

invoices.deleteInvoice = async (req, res) =>{

    await Invoice.findByIdAndRemove(req.params.id);
    res.json({status: 'Factura eliminada'});
} 



module.exports = invoices;
