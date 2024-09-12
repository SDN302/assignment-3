import mongoose, { Schema } from 'mongoose';

interface IUser {
	username: string;
	password: string;
	isAdmin?: boolean;
}

const UserSchema = new mongoose.Schema({
	username: { type: Schema.Types.String, required: true },
	password: { type: Schema.Types.String, required: true },
	isAdmin: { type: Schema.Types.Boolean, required: false },
});

export const User = mongoose.model<IUser>('User', UserSchema);
