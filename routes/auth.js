const { Router } = require ('express');
const { check } = require('express-validator');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');





const router = Router();

//Crear nuevo usuario
router.post( '/new',[

    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','la contraseña es obligatoria').isLength({min: 6}),
    check('rol','El rol es obligatorio'),
    validateFields
], createUser);



router.post( '/',[
    check('email','El campo es obligatorio').isEmail(),
    check('password','la contraseña es obligatoria').isLength({min: 6}),
    validateFields
], loginUser);


//Validar y revalidar token
router.get( '/renew', validateJWT, revalidateToken );






module.exports = router;