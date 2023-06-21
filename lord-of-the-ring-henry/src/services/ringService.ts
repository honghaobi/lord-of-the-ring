import axios from 'axios';
import {CharacterListResponse, MovieListResponse, MovieSearchResponse, QuoteListResponse} from "../types/type";

const BASE_URL = 'https://the-one-api.dev/v2/'
const ACCESS_TOKEN = 'oxDxkz_5IkvMFQAogHgT';
const MOVIE_POSTER_API_KEY = '00b83618470496ba70c1969239e034a6';
const MOVIE_POSTER_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_POSTER_API_KEY}&query=`
const headers = {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
};

const fetchData = async (url: string, errorMsg: string) => {
    try {
        const response = await axios.get(url, {headers});
        return response.data;
    } catch (error) {
        throw new Error(errorMsg);
    }
};
export const getMoviePoster = async (title: string): Promise<MovieSearchResponse> => {
    return fetchData(MOVIE_POSTER_BASE_URL + title, 'Failed to fetch movie data.');
};

export const getMovies = async (endPoint: string): Promise<MovieListResponse> => {
    return fetchData(BASE_URL + endPoint, 'Failed to fetch movies list.');
};

export const getCharacters = async (endPoint: string, params: string): Promise<CharacterListResponse> => {
    return fetchData(`${BASE_URL}${endPoint}?${params}`, 'Failed to fetch characters list.');
};

export const getQuote = async (endPoint: string): Promise<QuoteListResponse> => {
    return fetchData(`${BASE_URL}${endPoint}`, 'Failed to fetch quotes.');
};