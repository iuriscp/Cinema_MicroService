import { start, stop } from '../server/server'; //server
import supertest from 'supertest';
import cinemaCatalog from './cinemaCatalog';
import * as repositoryMock from '../repository/__mocks__/repository';

let app = null;

beforeAll(async () => {
    process.env.PORT = 3004
     app = await start(cinemaCatalog, repositoryMock); //server.start();
});

afterAll(async () => {
    await stop(); //server.stop();
});

test('GET /cities 200 OK', async () => {
    const response = await supertest(app).get('/cities');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeTruthy();
});

test('GET /cities/:cityId/movies 200 OK', async () => {
    const testCityId = '1';
    const response = await supertest(app).get(`/cities/${testCityId}/movies`);
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
});

test('GET /cities/:cityId/movies 404 NOT FOUND', async () => {
    const testCityId = '-1';
    const response = await supertest(app).get(`/cities/${testCityId}/movies`);
    expect(response.status).toEqual(404);
});

test('GET /cities/:cityId/movies/:movieId 200 OK', async () => {
    const testCityId = '1';
    const testMovieId = '1';
    const response = await supertest(app).get(`/cities/${testCityId}/movies/${testMovieId}`);
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
});
  
test('GET /cities/:cityId/movies/:movieId 404 NOT FOUND', async () => {
    const testCityId = '1';
    const testMovieId = '-1';
    const response = await supertest(app).get(`/cities/${testCityId}/movies/${testMovieId}`);
    expect(response.status).toEqual(404);
});

test('GET /cities/:cityId/cinemas 200 OK', async () => {
    const testCityId = '1';
    const response = await supertest(app).get(`/cities/${testCityId}/cinemas`);
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
});
    
test('GET /cities/:cityId/cinemas 404 NOT FOUND', async () => {
    const testCityId = '-1';
    const response = await supertest(app).get(`/cities/${testCityId}/cinemas`);
    expect(response.status).toEqual(404);
});

test('GET /cinemas/:cinemaId/movies 200 OK', async () => {
    const testCinemaId = '1';
    const response = await supertest(app).get(`/cinemas/${testCinemaId}/movies`);
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
});
      
test('GET /cities/:cityId/cinemas 404 NOT FOUND', async () => {
    const testCinemaId = '-1';
    const response = await supertest(app).get(`/cinemas/${testCinemaId}/movies`);
    expect(response.status).toEqual(404);
});

test('GET /cinemas/:cinemaId/movies/:movieId 200 OK', async () => {
    const testCinemaId = '1';
    const testMovieId = '1';
    const response = await supertest(app).get(`/cinemas/${testCinemaId}/movies/${testMovieId}`);
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
});
      
test('GET /cinemas/:cinemaId/movies/:movieId 404 OK', async () => {
    const testCinemaId = '1';
    const testMovieId = '-1';
    const response = await supertest(app).get(`/cinemas/${testCinemaId}/movies/${testMovieId}`);
    expect(response.status).toEqual(404);
});