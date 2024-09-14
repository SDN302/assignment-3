import { User } from '../models/user.model';

export const getUserByUsername = async (username: string) => {
	try {
		const user = await User.findOne({ username: username });

		if (!user) {
			throw new Error('User not found');
		}

		return user;
	} catch (error) {
		throw new Error('Error fetching user from database');
	}
};
