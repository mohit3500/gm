const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { registerValidation, loginValidation } = require('../validation');
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  //   Validation
  const { error } = registerValidation(user);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //   Duplicate Email
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send('Please use an unique email');
  }
  //   Duplicate Username
  const usernameExist = await User.findOne({ username: req.body.username });
  if (usernameExist) {
    return res.status(400).send('Please use an unique username');
  }
  const { username, email, password } = req.body;
  //   Password Hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //   User saving
  const newUser = new User({
    ...req.body,
    username,
    password: hashedPassword,
    email,
  });

  // Token
  const token = jwt.sign({ id: newUser._id, email }, process.env.Secret_Key, {
    expiresIn: '24h',
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).send({
      message: 'Thanks for registering',
      token: token,
      userId: savedUser._id,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  // Get User
  const user = await User.findOne({ email: req.body.email });

  //   Validation
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //   Duplicate Email
  if (!user) {
    return res.status(400).send('Email does not exist');
  }

  //   Comparing Password
  const verPass = bcrypt.compareSync(req.body.password, user.password);
  if (!verPass) {
    return res.status(400).send('Password is wrong');
  }

  // Token
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.Secret_Key,
    { expiresIn: '24h' }
  );

  res
    .status(201)
    .send({ message: 'Logged in', token: token, userId: user._id });
};

exports.getUser = async (req, res) => {
  try {
    // Finding User
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).send('User does not exist');
    }
    // Fetching details
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.generateOTP = async (req, res) => {
  req.app.locals.OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(201).send({ code: req.app.locals.OTP });
};

exports.verifyOTP = async (req, res) => {
  const { code } = req.body;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    // req.app.local.OTP = null;
    return res.status(201).send('Verify Successfully');
  }
  return res.status(400).send('Invalid OTP');
};

// Chats
exports.chats = async (req, res) => {
  res.status(201).send(chats);
};
