import { start, stop } from '../server/server'; //server
import supertest from 'supertest';
import movies from './movies';
import * as repositoryMock from '../repository/__mocks__/repository';

let app = null;

beforeAll(async () => {
  app = await start(movies, repositoryMock); //server.start();
});

afterAll(async () => {
  await stop(); //server.stop();
});

test('GET /movies 200 OK', async () => {
  const response = await supertest(app).get('/movies');
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.body.length).toBeTruthy();
});

test('GET /movies/:id 200 OK', async () => {
  const testMovieId = '1';
  const response = await supertest(app).get(`/movies/${testMovieId}`);
  expect(response.status).toEqual(200);
  expect(response.body).toBeTruthy();
});

test('GET /movies/:id 404 NOT FOUND', async () => {
    const testMovieId = '-1';
    const response = await supertest(app).get(`/movies/${testMovieId}`);
    expect(response.status).toEqual(404);
  });

test('GET /movies/premieres 200 OK', async () => {
  const response = await supertest(app).get('/movies/premieres');
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.body.length).toBeTruthy();
});
