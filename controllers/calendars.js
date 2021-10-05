const Calendar = require('../models/Calendar');
const calendars = {};





calendars.getCalendarByBarber = async(req, res) => {

    let query = {barberCode: req.params.id};
    const calendars = await Calendar.find(query);
    res.json(calendars);

}



calendars.getCalendars = async (req, res) => {
    const calendars = await Calendar.find()
    res.json(calendars);       
};

calendars.createCalendar = async (req, res) => {
    console.log('safsfngg', req.body);
     
    const calendar = new Calendar({
        
        userCode: req.body.userCode,
        barberCode: req.body.barberCode,
        date: req.body.date,
        stateSend: req.body.stateSend
        
        
    });
    await calendar.save();
    res.json({
        'status': 'Calendario guardado'});

};

calendars.getCalendar = async(req, res) => {
    const calendar = await Calendar.findById(req.params.id);
    res.json(calendar);
};



calendars.editCalendar = async(req, res) => {
    const {id} = req.params;
    const calendar = {
        
        userCode: req.body.userCode,
        barberCode: req.body.barberCode,
        date: req.body.date,
        statedSend: req.body.statedSend
    };
    await Calendar.findByIdAndUpdate(id, {$set: calendar}, {new: true})
    res.json({status: 'Calendario actualizado'});
};

calendars.deleteCalendar = async(req, res) => {
    await Calendar.findByIdAndRemove(req.params.id);
    res.json({status: 'Calendario eliminado'});
};



module.exports = calendars;
