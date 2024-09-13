import jwt from 'jsonwebtoken';
import { server } from '../config/config';

export const generateJWTToken = (payload: any): string | null => {
	let token: string | null = null;

	try {
		token = jwt.sign(payload, server.jwtSecret, {
			expiresIn: server.jwtExpiration,
		});
	} catch (error: any) {
		console.error(error.message);
	}

	return token;
};
