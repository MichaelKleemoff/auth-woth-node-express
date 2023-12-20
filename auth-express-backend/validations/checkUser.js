const checkUsername = (req, res, next) => {
	if (req.body.username) {
		console.log('username is okay');

		next();
	} else {
		res.status(400).json({ error: 'username is required!' });
	}
};

const validEmailRegex =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const checkEmail = (req, res, next) => {
	if (req.body.email && validEmailRegex.test(req.body.email)) {
		next();
	} else {
		res.status(400).json({ error: 'Valid email is required' });
	}
};

module.exports = {
	checkUsername,
	checkEmail,
};
