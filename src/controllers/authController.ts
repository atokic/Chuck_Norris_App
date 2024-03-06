import { Request, Response } from 'express';
import * as userService from '../services/userService';
import * as authService from '../services/authService';

export async function signup(req: Request, res: Response): Promise<void> {
    const { email, password, firstName, lastName } = req.body;
    try {
        const hashedPassword = await authService.hashPassword(password);
        const user = await userService.createUser(email, hashedPassword, firstName, lastName);
        const token = authService.generateToken(user);
        res.status(201).json({ token });
    } catch (error: any) {
        console.error('Error signing up:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    try {
        const user = await userService.findUserByEmail(email);
        if (!user) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const passwordMatch = await authService.comparePasswords(password, user.password);
        if (!passwordMatch) {
            // Handle invalid password
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const token = authService.generateToken(user);
        res.json({ token });
    } catch (error: any) {
        console.error('Error logging in:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}