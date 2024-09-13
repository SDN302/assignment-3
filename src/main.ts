import express from 'express';
import cors from 'cors';
import { DEVELOPMENT, server } from './config/config';
import connectDb from './config/db';
import apiRouter from './routes/api.routes';
import morgan from 'morgan';
import { setupSwagger } from './swagger/swagger';

// CORS Middleware
const corsOptions = {
	origin: server.origin,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	optionsSuccessStatus: 204,
};

//------------------------------------------------------------

// Express App
const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

// Routes API
app.use('/api', apiRouter);

app.listen(server.port, async () => {
	// Connect to MongoDB
	await connectDb();

	console.info(`Listening on PORT ${server.port}. 🚀`);
	console.info(`Environment: ${DEVELOPMENT ? 'Development' : 'Production'}`);
	console.info(`Origin: ${server.origin}`);
	console.info(`Database: ${server.databaseUrl}`);
	console.info(`Run at: ${server.schema}://${server.host}:${server.port}`);

	if (DEVELOPMENT) {
		// Swagger
		setupSwagger(app);

		console.info(
			`Swagger UI available at ${server.schema}://${server.host}:${server.port}/api-docs`,
		);
	}
});
