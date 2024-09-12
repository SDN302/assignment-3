import mongoose, { Schema } from 'mongoose';
import { User } from './user.model';

export interface IQuestion {
	text: string;
	author?: string;
	options: string[];
	keywords: string[];
	correctAnswerIndex: number;
}

const QuestionSchema = new mongoose.Schema({
	text: { type: Schema.Types.String, required: true },
	author: {
		type: Schema.Types.ObjectId,
		ref: User,
		required: false,
		default: null,
	},
	options: { type: [Schema.Types.String], required: true },
	keywords: { type: [Schema.Types.String], required: true },
	correctAnswerIndex: { type: Schema.Types.Number, required: true },
});

export const Question = mongoose.model<IQuestion>('Question', QuestionSchema);
