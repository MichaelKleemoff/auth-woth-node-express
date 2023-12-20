const pgp = require('pg-promise')();

require('dotenv').config();

const cn = {
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.PG_DATABASE,
	user: process.env.PG_USER,
	private_key: process.env.PRIVATE_KEY,
};

const db = pgp(cn);

module.exports = db;
