import express from 'express';
import {
	getAllUsers,
	getUserById,
} from '../../controllers/api/user.controller';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:userId', getUserById);

export default router;
