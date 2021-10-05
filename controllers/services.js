const Service = require('../models/Services');
const services = {};


services.getServices =  async(req, res) => {  
    
    const services = await Service.find();
    res.json(services);
        
}

services.createService =  async (req, res) =>{
    const service = new Service({
        serviceName: req.body.serviceName,
        serviceType: req.body.serviceType,
        servicePrice: req.body.servicePrice,
        serviceTime: req.body.serviceTime
    });
    await service.save();
    res.json({
        'status': 'Servicio guardado'});


} 

services.getService = async (req, res) =>{
    const service = await Service.findById(req.params.id);
    res.json(service);

} 

services.editService = async (req, res) =>{

    const {id} = req.params;
    const service = {
        serviceName: req.body.serviceName,
        serviceType: req.body.serviceType,
        servicePrice: req.body.servicePrice,
        serviceTime: req.body.serviceTime
    };
    await Service.findByIdAndUpdate(id, {$set: service}, {new: true})
    res.json({status: 'Servicio actualizado'});

} 

services.deleteService = async (req, res) =>{

    await Service.findByIdAndRemove(req.params.id);
    res.json({status: 'Servicio eliminado'});
} 



module.exports = services;
