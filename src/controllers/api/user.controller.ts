import { Request, Response } from 'express';
import { User } from '../../models/user.model';

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

//------------------------------------------------------------

export const getUserById = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;

		const user = await User.findById(userId);

		res.status(200).json(user);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};
