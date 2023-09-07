const tokenService = require('../services/token.service');
const userService = require('../services/user.service');

class AuthController {
	/**
	 * @type {import('express').RequestHandler}
	 */
	async login(req, res, next) {
		try {
			const { username, id } = req.body;

			const existingUser = await userService.getById(id);

			if (!existingUser) {
				res.status(401).end();
			}

			if (existingUser.username !== username) {
				res.status(401).end();
			}

			const token = tokenService.sign({ id });

			res.json({ token });
		} catch (error) {
			next(error);
		}
	}

	/**
	 * @type {import('express').RequestHandler}
	 */
	async getProfile(req, res, next) {
		try {
			res.send(req.user);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new AuthController();
