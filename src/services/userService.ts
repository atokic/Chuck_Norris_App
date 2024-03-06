import User, { UserDocument } from '../models/User';

// Example function to create a new user
export async function createUser(email: string, password: string, firstName: string, lastName: string): Promise<UserDocument> {
    return User.create({ email, password, firstName, lastName });
}

// Example function to find a user by email
export async function findUserByEmail(email: string): Promise<UserDocument | null> {
    return User.findOne({ email });
}