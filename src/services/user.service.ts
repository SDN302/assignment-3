import { IUser, User } from '../models/user.model';

export const getUserByUsername = async (username: string): Promise<IUser> => {
	try {
		const user = await User.findOne<IUser>({ username: username });

		if (!user) {
			throw new Error('User not found');
		}

		return user;
	} catch (error) {
		throw new Error('Error fetching user from database');
	}
};
