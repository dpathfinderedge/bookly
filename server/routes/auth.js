import { Router } from 'express';
import { signin, signup } from '../controllers/auth.js';

const router = Router();

// SIGN UP
router.post('/signup', signup);

// SIGN IN
router.post('/signin', signin);

export default router;