import express from 'express';
import {
	createQuestion,
	deleteQuestion,
	getAllQuestions,
	getQuestionById,
	updateQuestion,
} from '../../controllers/api/question.controller';

const router = express.Router();

/**
 * @swagger
 * definitions:
 *   Question:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *       text:
 *         type: string
 *       options:
 *         type: array
 *         items:
 *           type: string
 *       keywords:
 *         type: array
 *         items:
 *           type: string
 *       correctAnswerIndex:
 *         type: number
 */

/**
 * @swagger
 * definitions:
 *   CreateQuestionQuery:
 *     type: object
 *     properties:
 *       text:
 *         type: string
 *       options:
 *         type: array
 *         items:
 *           type: string
 *       keywords:
 *         type: array
 *         items:
 *           type: string
 *       correctAnswerIndex:
 *         type: number
 */

/**
 * @swagger
 * definitions:
 *   UpdateQuestionQuery:
 *     type: object
 *     properties:
 *       text:
 *         type: string
 *       options:
 *         type: array
 *         items:
 *           type: string
 *       keywords:
 *         type: array
 *         items:
 *           type: string
 *       correctAnswerIndex:
 *         type: number
 */

/**
 * @swagger
 * /api/questions:
 *   get:
 *     summary: Get all questions
 *     description: Get all questions
 *     tags:
 *       - Questions
 *     responses:
 *       200:
 *         description: Get all questions successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Question'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/', getAllQuestions);

/**
 * @swagger
 * /api/questions/{questionId}:
 *   get:
 *     summary: Get a question by ID
 *     description: Get a question by ID
 *     tags:
 *       - Questions
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID of the question
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get a question by ID successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Question'
 *       404:
 *         description: Question not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/:questionId', getQuestionById);

/**
 * @swagger
 * /api/questions:
 *   post:
 *     summary: Create a question
 *     description: Create a question
 *     tags:
 *       - Questions
 *     requestBody:
 *       description: The question to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/CreateQuestionQuery'
 *     responses:
 *       201:
 *         description: Create a question successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Question'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/', createQuestion);

/**
 * @swagger
 * /api/questions/{questionId}:
 *   put:
 *     summary: Update a question
 *     description: Update a question
 *     tags:
 *       - Questions
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID of the question
 *         schema:
 *           type: string
 *     requestBody:
 *       description: The question to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/UpdateQuestionQuery'
 *     responses:
 *       200:
 *         description: Update a question successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Question'
 *       404:
 *         description: Question not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.put('/:questionId', updateQuestion);

/**
 * @swagger
 * /api/questions/{questionId}:
 *   delete:
 *     summary: Delete a question
 *     description: Delete a question
 *     tags:
 *       - Questions
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         description: ID of the question
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Update a question successfully
 *       404:
 *         description: Question not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.delete('/:questionId', deleteQuestion);

export default router;
