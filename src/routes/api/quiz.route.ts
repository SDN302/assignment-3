import express from 'express';
import {
	createManyQuestionsForQuiz,
	createOneQuestionForQuiz,
	createQuiz,
	deleteQuiz,
	getAllQuizzes,
	getCapitalQuestions,
	getQuizById,
	updateQuiz,
} from '../../controllers/api/quiz.controller';

const router = express.Router();

/**
 * @swagger
 * definitions:
 *   Quiz:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       questions:
 *         type: array
 *         items:
 *           type: string
 */

/**
 * @swagger
 * definitions:
 *   CreateQuizQuery:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       questions:
 *         type: array
 *         items:
 *           type: string
 */

/**
 * @swagger
 * definitions:
 *   UpdateQuizQuery:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       questions:
 *         type: array
 *         items:
 *           type: string
 */

/**
 * @swagger
 * definitions:
 *   CapitalQuestion:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       questions:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Question'
 */

/**
 * @swagger
 * /api/quizzes:
 *   get:
 *     summary: Get all quizzes
 *     description: Retrieve a list of all quizzes
 *     tags:
 *       - Quizzes
 *     responses:
 *       200:
 *         description: A list of quizzes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Quiz'
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
router.get('/', getAllQuizzes);

/**
 * @swagger
 * /api/quizzes/{quizId}:
 *   get:
 *     summary: Get a quiz by ID
 *     description: Retrieve a quiz by ID
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A quiz
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Quiz'
 *       404:
 *         description: Quiz not found
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
router.get('/:quizId', getQuizById);

/**
 * @swagger
 * /api/quizzes:
 *   post:
 *     summary: Create a new quiz
 *     description: Create a new quiz
 *     tags:
 *       - Quizzes
 *     requestBody:
 *       description: The quiz to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/CreateQuizQuery'
 *     responses:
 *       200:
 *         description: A quiz
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Quiz'
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
router.post('/', createQuiz);

/**
 * @swagger
 * /api/quizzes/{quizId}:
 *   put:
 *     summary: Update a quiz by ID
 *     description: Update a quiz by ID
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
 *     requestBody:
 *       description: The quiz to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/UpdateQuizQuery'
 *     responses:
 *       200:
 *         description: A quiz
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Quiz'
 *       404:
 *         description: Quiz not found
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
router.put('/:quizId', updateQuiz);

/**
 * @swagger
 * /api/quizzes/{quizId}:
 *   delete:
 *     summary: Delete a quiz by ID
 *     description: Delete a quiz by ID
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete a quiz successfully
 *       404:
 *         description: Quiz not found
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
router.delete('/:quizId', deleteQuiz);

/**
 * @swagger
 * /api/quizzes/{quizId}/populate:
 *   get:
 *     summary: Populate a quiz with capital questions
 *     description: Populate a quiz with capital questions
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A quiz with capital questions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/CapitalQuestion'
 *       404:
 *         description: Quiz not found
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
 *                 message:
 *                   type: string
 */
router.get('/:quizId/populate', getCapitalQuestions);

/**
 * @swagger
 * /api/quizzes/{quizId}/question:
 *   post:
 *     summary: Create a new question for a quiz
 *     description: Create a new question for a quiz
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
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
 *       404:
 *         description: Quiz not found
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
router.post('/:quizId/question', createOneQuestionForQuiz);

/**
 * @swagger
 * /api/quizzes/{quizId}/questions:
 *   post:
 *     summary: Create many questions for a quiz
 *     description: Create many questions for a quiz
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
 *     requestBody:
 *       description: The question to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/definitions/CreateQuestionQuery'
 *     responses:
 *       201:
 *         description: Create a question successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Question'
 *       404:
 *         description: Quiz not found
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
router.post('/:quizId/questions', createManyQuestionsForQuiz);

export default router;
