const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(' ')[1];
      let decodedToken = jwt.verify(token, process.env.Secret_Key);
      req.user = decodedToken;
    } else {
      res.status(401).send({ message: 'Unauthorized User' });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: 'Unauthorized User' });
  }
};

module.exports = auth;

