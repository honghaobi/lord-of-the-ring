import axios from 'axios';

const BASE_URL = 'https://the-one-api.dev/v2/'
const ACCESS_TOKEN = 'oxDxkz_5IkvMFQAogHgT';
const headers = {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
};
export const getMovies = async (endPoint: string): Promise<any> => {
    try {
        const response = await axios.get(BASE_URL + endPoint, {headers});
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch movies list.');
    }
};