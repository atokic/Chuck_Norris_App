import axios from 'axios';

export async function fetchChuckNorrisJoke(): Promise<string> {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return response.data.value;
    } catch (error: any) {
        console.error('Error fetching Chuck Norris joke:', error.message);
        throw new Error('Failed to fetch Chuck Norris joke');
    }
}