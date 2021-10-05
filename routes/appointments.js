const { Router } = require ('express');

const appointments = require('../controllers/appointments');



const router = Router();


router.get('/', appointments.getAppointments);
router.post('/', appointments.createAppointment);
router.get('/:id', appointments.getAppointment);
router.put('/:id', appointments.editAppointment);
router.delete('/:id', appointments.deleteAppointment);



module.exports = router;