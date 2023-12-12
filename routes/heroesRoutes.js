import express from 'express'
import { createHero } from '../controllers/heroesController.js'

const router = express.Router();

router.post('/hero', createHero);

export default router;


