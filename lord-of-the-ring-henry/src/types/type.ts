export type Movie = {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
    postURL: string;
};

export type MovieListResponse = {
    docs: Movie[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};

export type MovieResult = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type MovieSearchResponse = {
    page: number;
    results: MovieResult[];
    total_pages: number;
    total_results: number;
};




