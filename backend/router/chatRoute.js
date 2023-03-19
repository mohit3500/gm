const { Router } = require('express');
const {
  createChat,
  userChats,
  findChat,
} = require('../controllers/chatController');

const router = Router();

router.route('/').post(createChat);
router.route('/:userId').get(userChats);
router.route('/find/:firstId/:secondId').get(findChat);

module.exports = router;
