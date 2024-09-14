import express from 'express';
import {
	getAllUsers,
	getUserById,
} from '../../controllers/api/user.controller';

const router = express.Router();

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *       username:
 *         type: string
 *       hashedPassword:
 *         type: string
 *       isAdmin:
 *         type: boolean
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: All users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/User'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 */
router.get('/', getAllUsers);

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: Get user by ID
 *     description: Get user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: A user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/User'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ErrorResponse'
 */
router.get('/:userId', getUserById);

export default router;
