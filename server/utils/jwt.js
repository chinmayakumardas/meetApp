const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, 'your_jwt_secret_key', { expiresIn: '1h' }); // Change the secret key
};

module.exports = { generateToken };
