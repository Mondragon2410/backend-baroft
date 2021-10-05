const { Router } = require('express');

const comments = require('../controllers/comments');


const router = Router();

router.get('/', comments.getComments);
router.post('/', comments.createComment);
router.get('/:id', comments.getComment);
router.put('/:id', comments.editComment);
router.delete('/:id', comments.deleteComment);


module.exports = router;