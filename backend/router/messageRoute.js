const { Router } = require('express');
const { getMessage, addMessage } = require('../controllers/messageController');
const router = Router();

router.route('/').post(addMessage);
router.route('/:chatId').get(getMessage);

module.exports = router;
