const { Router } = require ('express');

const barbers = require('../controllers/barbers');



const router = Router();



router.get('/userCode/:id', barbers.getBarberByUserCode);
router.get('/', barbers.getBarbers);
router.post('/', barbers.createBarber);
router.get('/:id', barbers.getBarber); 
router.put('/:id', barbers.editBarber);
router.delete('/:id', barbers.deleteBarber);



module.exports = router;