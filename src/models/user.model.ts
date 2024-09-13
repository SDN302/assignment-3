import mongoose, { Schema } from 'mongoose';

interface IUser {
	username: string;
	hashedPassword: string;
	isAdmin?: boolean;
}

const UserSchema = new mongoose.Schema({
	username: { type: Schema.Types.String, required: true },
	hashedPassword: { type: Schema.Types.String, required: true },
	isAdmin: { type: Schema.Types.Boolean, required: false, default: false },
});

export const User = mongoose.model<IUser>('User', UserSchema);
