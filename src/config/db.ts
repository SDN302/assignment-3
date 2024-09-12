import mongoose from 'mongoose';
import { server } from './config';

const connectDb = async () => {
	try {
		console.info('Connecting to database...');

		const connection = await mongoose.connect(server.databaseUrl, {
			dbName: 'SimpleQuiz',
			autoCreate: false,
		});

		console.info(
			`MongoDB connected: ${connection.connection.host}:${connection.connection.port}`,
		);
	} catch (error) {
		console.error('Error connecting to database: ', error);

		process.exit(1);
	}
};

export default connectDb;
