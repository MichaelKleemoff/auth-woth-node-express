// this file is in charge of QUERYING
// the DB and returning the data to the controller

const db = require('../db/dbConfig.js');

const getOneUser = async (id) => {
	try {
		const oneUser = await db.oneOrNone(
			'SELECT * FROM users WHERE user_id=$1',
			id
		);
		return oneUser;
	} catch (err) {
		return err;
	}
};

const getOneUserByEmail = async ({ email }) => {};
const createUser = async (user) => {};

module.exports = {
	getOneUser,
	getOneUserByEmail,
	createUser,
};
