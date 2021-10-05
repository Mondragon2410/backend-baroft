const Comment = require('../models/Comments');
const comments = {};



comments.getComments = async (req, res) => {
    const comments = await Comment.find()       
    res.json(comments);
};

comments.createComment = async (req, res) => {
    
    const comment = new Comment({
        nameClient: req.body. nameClient,
        serviceName: req.body.serviceName,
        serviceType: req.body.serviceType,
        serviceComments: req.body.serviceComments
    
    });
    await comment.save();
    res.json({
        'status': 'Comentario guardado'});

};

comments.getComment = async(req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
};

comments.editComment = async(req, res) => {
    const {id} = req.params;
    const comment = {
        nameClient: req.body. nameClient,
        serviceName: req.body.serviceName,
        serviceType: req.body.serviceType,
        serviceComments: req.body.serviceComments
    };
    await Comment.findByIdAndUpdate(id, {$set: comment}, {new: true})
    res.json({status: 'Comentario actualizado'});
};

comments.deleteComment = async(req, res) => {
    await Comment.findByIdAndRemove(req.params.id);
    res.json({status: 'Comentario eliminado'});
};

module.exports = comments;