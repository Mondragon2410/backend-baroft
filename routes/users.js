const { Router } = require ('express');

const users = require('../controllers/users');
const User = require('../models/User');




const router = Router();


router.get('/role/:id', users.getUserByRole); 



router.get('/', users.getUsers);
router.post('/', users.createUser);
router.get('/:id', users.getUser); 
router.put('/:id', users.editUser);
router.delete('/:id', users.deleteUser);




module.exports = router;