import dotenv from 'dotenv';
import express from 'express';

import jokeRoutes from './src/routes/jokeRoutes';
import authRoutes from './src/routes/authRoutes';
import connectDatabase from './config/database';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('MongoDB URI is not set.');
    process.exit(1);
}

connectDatabase();

const app = express();
app.use(express.json());

app.use('/api/jokes', jokeRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Chuck Norris Joke API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
