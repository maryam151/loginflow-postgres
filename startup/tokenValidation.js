const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

function generateAuthToken (userId) {
<<<<<<< HEAD
  const token = jwt.sign({ id: userId}, "Maryam", { expiresIn: '15m' });
=======
  const token = jwt.sign({ id: userId}, config.get('jwtPrivateKey'), { expiresIn: '15m' });
>>>>>>> cf784656b39749252186ec27165ffd49c76a2057
  return token;
}

function generateRefreshToken (userId) {
<<<<<<< HEAD
  const token = jwt.sign({ id: userId}, "Saleh", { expiresIn: '5d' });
=======
  const token = jwt.sign({ id: userId}, config.get('jwtRefreshKey'), { expiresIn: '5d' });
>>>>>>> cf784656b39749252186ec27165ffd49c76a2057
  return token;
}

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(user, schema);
}

exports.validate = validateUser;
exports.generateAuthToken = generateAuthToken;
exports.generateRefreshToken = generateRefreshToken;