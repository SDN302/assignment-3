import dotnev from 'dotenv';

dotnev.config();

export const DEVELOPMENT: boolean =
	process.env['APP_ENV'] === 'development' || false;

export const SCHEMA: string = process.env['SCHEMA'] || 'http';
export const SERVER_HOST: string = process.env['SERVER_HOST'] || 'localhost';
export const SERVER_PORT: number = parseInt(
	process.env['SERVER_PORT'] || '3000',
);

export const SERVER_ORIGIN: string = DEVELOPMENT
	? '*'
	: (process.env['ORIGIN'] as string) || 'http://localhost:3000';

export const DATABASE_URL: string =
	process.env['DATABASE_URL'] || 'mongodb://localhost:27017';

export const server = {
	schema: SCHEMA,
	host: SERVER_HOST,
	port: SERVER_PORT,
	origin: SERVER_ORIGIN,
	databaseUrl: DATABASE_URL,
};
