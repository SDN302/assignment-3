import express from 'express';
import { login } from '../../controllers/api/auth.controller';

const router = express.Router();

/**
 * @swagger
 * definitions:
 *   LoginQuery:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *         required: true
 *       password:
 *         type: string
 *         required: true
 */

/**
 * @swagger
 * definitions:
 *   LoginResponse:
 *     type: object
 *     properties:
 *       token:
 *         type: string
 *       message:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   ErrorResponse:
 *     type: object
 *     properties:
 *       error:
 *         type: string
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login
 *     description: Login to the application
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Login details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/LoginQuery'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/LoginResponse'
 *       400:
 *         description: Username and password are required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *       401:
 *         description: Incorrect password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *       500:
 *         description: Error generating token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 */
router.post('/login', login);

export default router;
