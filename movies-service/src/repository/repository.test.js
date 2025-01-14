import { test, expect, beforeAll } from '@jest/globals';
import '../config/database.js'
import { getAllMovies, getMovieById, getMoviePremieres} from './repository.js';

let testMovieId = null

beforeAll(async()=>{
    const movies = await getAllMovies();
    testMovieId = movies[0]._id;
    
});

    test('getAllMovies', async () => {
        const movies = await getAllMovies();
        expect(Array.isArray(movies)).toBeTruthy();
        expect(movies.length).toBeTruthy();
    });

    test('getMoviesById', async () => {
        const movie = await getMovieById(testMovieId);
        expect(movie).toBeTruthy();
        expect(movie._id).toEqual(testMovieId);
    });

    test('getMoviePremieres', async () => {
        const monthAgo = new Date;
        monthAgo.setMonth(monthAgo.getMonth()-1);

        const movies = await getMoviePremieres();
        expect(Array.isArray(movies)).toBeTruthy();
        expect(movies).toBeTruthy();
        expect(movies[0].dataLancamento.getTime()).toBeGreaterThanOrEqual(monthAgo.getTime());

    });