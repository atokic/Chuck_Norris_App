// database.ts
import mongoose from 'mongoose';

async function connectDatabase(): Promise<void> {
    try {
        await mongoose.connect(process.env.MONGODB_URI || '', {
        });
        console.log('Connected to database');
    } catch (error:any) {
        console.error('Error connecting to database:', error.message);
        process.exit(1); // Exit process with failure
    }
}

export default connectDatabase;
