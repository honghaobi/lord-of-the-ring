import {render, screen, act} from '@testing-library/react';
import MoviesPage from '../components/MoviesPage';
import {getMovies, getMoviePoster} from '../services/ringService';

jest.mock('../services/ringService');

test('renders movie posters and shows info of selected movie', async () => {
    const mockMoviesData = {
        docs: [
            {
                name: 'The Fellowship of the Ring',
                budgetInMillions: 93,
                boxOfficeRevenueInMillions: 871,
                academyAwardWins: 4,
                academyAwardNominations: 13,
                rottenTomatoesScore: 91
            },
            {
                name: 'The Two Towers',
                budgetInMillions: 94,
                boxOfficeRevenueInMillions: 926,
                academyAwardWins: 2,
                academyAwardNominations: 6,
                rottenTomatoesScore: 95
            }
        ],
    };

    const mockMoviePosterData = {
        results: [
            {poster_path: '/poster1.jpg', overview: 'An epic adventure.'},
            {poster_path: '/poster2.jpg', overview: 'The journey continues.'},
        ],
    };

    (getMovies as jest.Mock).mockResolvedValue(mockMoviesData);
    (getMoviePoster as jest.Mock).mockResolvedValue(mockMoviePosterData);

    await act(async () => {
        render(<MoviesPage/>);
    })

    mockMoviesData.docs.forEach(async (movie, i) => {
        const poster: HTMLImageElement = await screen.findByAltText(movie.name);
        expect(poster.src).toContain(`https://image.tmdb.org/t/p/w500/${mockMoviePosterData.results[i].poster_path}`);
    });
});