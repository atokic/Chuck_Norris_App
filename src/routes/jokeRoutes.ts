import express from 'express';
import * as jokeController from '../controllers/jokeController';

const router = express.Router();

router.get('/fetch-and-send', jokeController.fetchJokeAndSendEmail);

export default router;



