const express = require('express');
const bcrypt = require('bcryptjs');

const {
	getOneUser,
	getOneUserByEmail,
	createUser,
} = require('../queries/users.js');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { checkUsername, checkEmail } = require('../validations/checkUser.js');
const users = express.Router();

users.get('/:id', async (req, res) => {
	const { id } = req.params;
	const oneUser = await getOneUser(id);

	if (oneUser) {
		res.json(oneUser);
	} else {
		res.status(404).json({ error: 'User not found!' });
	}
});

// LOGIN ROUTE
users.post('/login', checkUsername, checkEmail, async (req, res) => {});

// SIGN UP ROUTE
users.post('/', checkUsername, checkEmail, async (req, res) => {});

module.exports = users;
