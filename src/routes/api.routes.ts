import { Router } from 'express';
import authApi from './api/auth.route';
import questionApi from './api/question.route';
import quizApi from './api/quiz.route';
import userApi from './api/user.route';

const apiRouter = Router();

apiRouter.use('/auth', authApi);
apiRouter.use('/questions', questionApi);
apiRouter.use('/quizzes', quizApi);
apiRouter.use('/users', userApi);

export default apiRouter;
