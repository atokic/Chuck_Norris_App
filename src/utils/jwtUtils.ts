import jwt from 'jsonwebtoken';
import { Request } from 'express';

// Function to generate JWT token
export function generateToken(payload: any): string {
    // Sign JWT token with payload and secret key
    return jwt.sign(payload, process.env.JWT_SECRET_KEY || '', { expiresIn: '1h' });
}

// Function to verify JWT token
export function verifyToken(token: string): any {
    // Verify JWT token with secret key
    return jwt.verify(token, process.env.JWT_SECRET_KEY || '');
}

// Function to extract user from JWT token in request headers
export function extractUser(req: Request): any {
    // Extract token from request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        // Verify token and return decoded user data
        return verifyToken(token);
    }

    return null;
}
