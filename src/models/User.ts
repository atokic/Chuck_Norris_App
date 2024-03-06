import mongoose, { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const userSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

export default mongoose.model<UserDocument>('User', userSchema);
