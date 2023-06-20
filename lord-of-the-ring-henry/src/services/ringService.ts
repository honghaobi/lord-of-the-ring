import axios from 'axios';
import {CharacterListResponse, MovieListResponse, MovieSearchResponse} from "../types/type";

const BASE_URL = 'https://the-one-api.dev/v2/'
const ACCESS_TOKEN = 'oxDxkz_5IkvMFQAogHgT';
const MOVIE_POSTER_API_KEY = '00b83618470496ba70c1969239e034a6';
const MOVIE_POSTER_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_POSTER_API_KEY}&query=`
const headers = {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
};

export const getMoviePoster = async (title: string): Promise<MovieSearchResponse> => {
    try {
        const response = await axios.get(MOVIE_POSTER_BASE_URL + title);
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch movie data.');
    }
};

export const getMovies = async (endPoint: string): Promise<MovieListResponse> => {
    try {
        const response = await axios.get(BASE_URL + endPoint, {headers});
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch movies list.');
    }
};
export const getCharacters = async (endPoint: string): Promise<CharacterListResponse> => {
    try {
        const response = await axios.get(BASE_URL + endPoint, {headers});
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch characters list.');
    }
};