const User = require('../models/User');
const users = {};



users.getUserByRole = async(req, res) => {

    let query = {role: req.params.id};
    const users = await User.find(query);
    res.json(users);

}



users.getUsers = async (req, res) => {
    const users = await User.find()       
    res.json(users);
};

users.createUser = async (req, res) => {
    const user = new User({
        
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        
        
    });
    await user.save();
    res.json({
        'status': 'Usuario guardado'});

};

users.getUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};



users.editUser = async(req, res) => {
    const {id} = req.params;
    const user = {
        
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true})
    res.json({status: 'Usuario actualizado'});
};

users.deleteUser = async(req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario eliminado'});
};



module.exports = users;
