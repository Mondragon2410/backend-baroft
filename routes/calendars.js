const { Router } = require ('express');

const calendars = require('../controllers/calendars');



const router = Router();


router.get('/calendar/:id', calendars.getCalendarByBarber);
router.get('/', calendars.getCalendar);
router.post('/', calendars.createCalendar);
router.get('/:id', calendars.getCalendars);
router.put('/:id', calendars.editCalendar);
router.delete('/:id', calendars.deleteCalendar);
 


module.exports = router;