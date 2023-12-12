import express from 'express'
import { battle } from '../controllers/battleController.js';

const router = express.Router();

router.post("/battle", battle);

export default router;
