const Appointment = require('../models/Appointments');
const appointments = {};



appointments.getAppointments = async (req, res) => {
    const appointments = await Appointment.find()       
    res.json(appointments);
};

appointments.createAppointment = async (req, res) => {
    
    const appointment = new Appointment({
        nameClient: req.body.nameClient,
        serviceName: req.body.serviceName,
        serviceHour: req.body.serviceHour,
        serviceDate: req.body.serviceDate,
        nameBarber: req.body.nameBarber,
        servicePrice: req.body.servicePrice,
        serviceStatus: req.body.serviceStatus

    });
    await appointment.save();
    res.json({
        'status': 'Cita guardada'});

};

appointments.getAppointment = async(req, res) => {
    const appointment = await Appointment.findById(req.params.id);
    res.json(appointment);
};

appointments.editAppointment = async(req, res) => {
    const {id} = req.params;
    const appointment = {
        nameClient: req.body.nameClient,
        serviceName: req.body.serviceName,
        serviceHour: req.body.serviceHour,
        serviceDate: req.body.serviceDate,
        nameBarber: req.body.nameBarber,
        servicePrice: req.body.servicePrice,
        serviceStatus: req.body.serviceStatus
    };
    await Appointment.findByIdAndUpdate(id, {$set: appointment}, {new: true})
    res.json({status: 'Cita actualizada'});
};

appointments.deleteAppointment = async(req, res) => {
    await Appointment.findByIdAndRemove(req.params.id);
    res.json({status: 'Cita eliminada'});
};

module.exports = appointments;