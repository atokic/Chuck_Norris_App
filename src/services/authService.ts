import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserDocument } from '../models/User';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';

export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
}

export function generateToken(user: UserDocument): string {
    const payload = {
        userId: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
    };
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' });
}

// Interface for decoded token payload
interface DecodedToken {
    email: string;
}

// Function to verify and decode JWT token
export function verifyToken(token: string): DecodedToken {
    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, JWT_SECRET_KEY) as DecodedToken;
        return decoded;
    } catch (error) {
        throw new Error('Invalid token'); // Throw error if token is invalid
    }
}