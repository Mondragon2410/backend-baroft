const { Router } = require ('express');

const services = require('../controllers/services');



const router = Router();

router.get('/', services.getServices );
router.post('/', services.createService);
router.get('/:id', services.getService);
router.put('/:id', services.editService);
router.delete('/:id', services.deleteService);
 


module.exports = router;