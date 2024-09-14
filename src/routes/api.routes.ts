import { Router } from 'express';
import authApi from './api/auth.route';
import questionApi from './api/question.route';
import quizApi from './api/quiz.route';
import userApi from './api/user.route';
import {
	authenticateAdmin,
	authenticateToken,
} from '../middlewares/auth.middleware';

const apiRouter = Router();

apiRouter.use('/auth', authApi);
apiRouter.use('/questions', authenticateToken, questionApi);
apiRouter.use('/quizzes', authenticateToken, quizApi);
apiRouter.use('/users', authenticateToken, authenticateAdmin, userApi);

export default apiRouter;
