import { Request, Response, NextFunction } from 'express';
import {
	decodeTokenPayload,
	verifyJWTToken,
	verifyTokenIsAdmin,
} from '../services/auth.service';

export const authenticateToken = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	const result = verifyJWTToken(token as string);

	if (!result) {
		return res.status(403).json({ message: 'Forbidden' });
	}

	const payload = decodeTokenPayload(token as string);

	req.body.user = payload;

	return next();
};

export const authenticateAdmin = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	const result = verifyTokenIsAdmin(token as string);

	if (!result) {
		return res.status(403).json({ message: 'Forbidden' });
	}

	return next();
};
