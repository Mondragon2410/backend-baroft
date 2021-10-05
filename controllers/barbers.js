const Barber = require('../models/Barbers');
const barbers = {};





barbers.getBarberByUserCode = async(req, res) => {

    let query = {userCode: req.params.id};
    const barbers = await Barber.find(query);
    res.json(barbers);

}


barbers.getBarbers = async (req, res) => {
    const barbers = await Barber.find()       //Busca todos los barberos
    res.json(barbers);
};

barbers.createBarber = async (req, res) => {
    console.log('req', req.body);
    const barber = new Barber({
        img: req.body.img,
        name: req.body.name,
        barberType: req.body.barberType,
        email: req.body.email,
        phone: req.body.phone,
        sex: req.body.sex,
        userCode: req.body.userCode
    });
    await barber.save();
    res.json({
        'status': 'Barbero guardado'});

};

barbers.getBarber = async(req, res) => {
    const barber = await Barber.findById(req.params.id);
    res.json(barber);
};

/* barbers.getImg = async(req, res) => {
    const barber = await Barber.findById(req.params.id);
    res.json(barber);
}; */

barbers.editBarber = async(req, res) => {
    const {id} = req.params;
    const barber = {
        img: req.body.img,
        name: req.body.name,
        barberType: req.body.barberType,
        email: req.body.email,
        phone: req.body.phone,
        sex: req.body.sex,
        userCode: req.body.userCode
    };
    await Barber.findByIdAndUpdate(id, {$set: barber}, {new: true})
    res.json({status: 'Barbero actualizado'});
};

barbers.deleteBarber = async(req, res) => {
    await Barber.findByIdAndRemove(req.params.id);
    res.json({status: 'Barbero eliminado'});
};



module.exports = barbers;
