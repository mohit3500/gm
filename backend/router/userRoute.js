const { Router } = require('express');
const {
  register,
  login,
  getUser,
  generateOTP,
  verifyOTP,
} = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = Router();

// Post Requests

router.route('/register').post(register);
router.route('/login').post(login);
// router.route('/verifyOTP').post(verifyOTP);

// Get Requests
router.route('/user/:id').get(getUser);
// router.route('/generateOTP').get(generateOTP);

module.exports = router;
