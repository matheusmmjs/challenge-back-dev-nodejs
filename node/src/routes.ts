import { Router } from 'express';

import UserController from '@controllers/UserController';
import AuthController from '@controllers/AuthController';
import authMiddleware from '@middlewares/authMiddleware';
import TransferController from '@controllers/TransferController';

const router = Router();

router.post('/users', UserController.store);
router.get('/users', UserController.indexAll);

router.post('/auth', AuthController.authenticate);
router.get('/auth', authMiddleware, UserController.index);

router.post('/transfers', TransferController.store);
router.get('/transfers', TransferController.index);

export default router;
