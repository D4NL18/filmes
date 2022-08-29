export interface IMovie {
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    adult: boolean;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}