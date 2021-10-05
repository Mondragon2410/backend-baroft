const jwt = require('jsonwebtoken');



const generateJWT = (uid, name) => {
    
    const payload = {uid, name}; //Objeto con uid y name 

    return new Promise((resolve, reject) => {

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
       }, (err, token) => {
    
            if ( err ){
                //TODO MAL
                reject(err);
            }else{
                //TODO BIEN
                resolve( token )
            }

    })

  });
}

module.exports = {
    generateJWT
}