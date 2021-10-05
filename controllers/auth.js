const { response } = require("express");
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require("../helpers/jwt");




const createUser = async(req, res = response) => {
    console.log('req', req.body);
    const { name, email, password, role} = req.body;

    try {

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }
 
        const dbUser = new User( req.body );


        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(password, salt);


        const token = await generateJWT(dbUser.id, name, dbUser.role );

        await dbUser.save();

        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            role, 
            token
           
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: true,
            msg: 'Por favor hable con el administrador'
        });
    }

} 

const loginUser = async(req, res = response) => {

    const { email, password} =  req.body

    try {

        const dbUser = await User.findOne({email});

        if( !dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales no son validas'
            });
        }

        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'El password no es valido'
            });
        }

        const token = await generateJWT(dbUser.id, dbUser.name);

        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
    
}


const revalidateToken = async(req, res = response) => {

   const {uid, name} = req;

   const dbUser = await User.findById(uid, name);

    const token = await generateJWT(uid, dbUser.name);

    return res.json({
        ok: true,
        uid,
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role, 
        token
       
    
    });

}



module.exports = {
    createUser,
    loginUser,
    revalidateToken 
}