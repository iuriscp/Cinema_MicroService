import { test, expect, beforeAll } from '@jest/globals';
import '../config/database.js'
import * as repository from './repository.js';

let cityId = null;
let cinemaId = null;
let movieId = null;

beforeAll(async()=>{
    const cities = await repository.getAllCites();
    cityId = cities[cities.length - 1]._id;

    const cinemas = await repository.getCinemasByCityId(cityId);
    cinemaId = cinemas[0]._id;

    movieId = cinemas[0].salas[0].sessoes[0].idFilme;
});

    test('getAllCities', async () => {
        const cities = await repository.getAllCites();
        expect(Array.isArray(cities)).toBeTruthy();
        expect(cities.length).toBeTruthy();
    });

    test('getCinemasByCityId', async () => {
        const cinemas = await repository.getCinemasByCityId(cityId);
        expect(Array.isArray(cinemas)).toBeTruthy();
    });


    test('getMoviesByCinemaId', async ()=>{
        const movies  = await repository.getMoviesByCinemaId(cinemaId);
        expect(Array.isArray(movies)).toBeTruthy();
        expect(movies.length).toBeTruthy();
    });

    test('getMoviesByCityId', async ()=>{
        const movies  = await repository.getMoviesByCityId(cityId);
        expect(Array.isArray(movies)).toBeTruthy();
        expect(movies.length).toBeTruthy();
    });

    test('getMovieSessionsByCityId', async ()=>{
        const movieSessions = await repository.getMovieSessionsByCityId(movieId, cityId);
        console.log(movieSessions);
        expect(Array.isArray(movieSessions)).toBeTruthy();
        expect(movieSessions.length).toBeTruthy();
    });