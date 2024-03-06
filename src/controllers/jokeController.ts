import { Request, Response } from 'express';
import * as jokeService from '../services/jokeService';
import * as emailUtils from '../utils/emailUtils';
import * as authService from '../services/authService';

export async function fetchJokeAndSendEmail(req: Request, res: Response): Promise<void> {
    const token = req.headers.authorization?.split(' ')[1]; // Extract JWT token from the Authorization header
    if (!token) {
        res.status(401).json({ error: 'Unauthorized: Missing token' });
        return;
    }

    try {
        // Decode JWT token to extract user's email
        const decodedToken = authService.verifyToken(token);
        const userEmail = decodedToken.email;

        // Fetch Chuck Norris joke
        const joke = await jokeService.fetchChuckNorrisJoke();

        // Send joke to user's email
        await emailUtils.sendEmail(userEmail, 'Chuck Norris Joke', joke);

        res.status(200).json({ message: 'Joke sent successfully' });
    } catch (error: any) {
        console.error('Error fetching and sending joke:', error.message);
        res.status(500).json({ error: 'Failed to fetch and send joke' });
    }
}