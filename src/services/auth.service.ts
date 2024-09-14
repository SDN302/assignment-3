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

export const verifyJWTToken = (token: string): boolean => {
	let isValid = false;

	try {
		jwt.verify(token, server.jwtSecret);

		isValid = true;
	} catch (error: any) {
		console.error(error.message);
	}

	return isValid;
};

export const verifyTokenIsAdmin = (token: string): boolean => {
	let isAdmin = false;

	try {
		const decodedToken = jwt.verify(token, server.jwtSecret) as any;

		if (decodedToken.isAdmin) {
			isAdmin = true;
		}
	} catch (error: any) {
		console.error(error.message);
	}

	return isAdmin;
};

export const decodeTokenPayload = (token: string): any | null => {
	let payload: any | null = null;

	try {
		payload = jwt.verify(token, server.jwtSecret);
	} catch (error: any) {
		console.error(error.message);
	}

	return payload;
};
