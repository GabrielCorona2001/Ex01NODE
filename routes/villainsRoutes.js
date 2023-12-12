import express from 'express'
import { createVillain } from "../controllers/villainsController.js";

const router = express.Router();

router.post('/vilain', createVillain);

export default router;
