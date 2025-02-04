import { test, expect, jest } from '@jest/globals';
import { start, stop } from './server';
import supertest from 'supertest';

const apiMock = jest.fn((app, repository) => {
    app.get('/error', (req, res, next)=>{
        throw new Error('mock error');
    })
});

test('Server Start', async () => {
   const app = await start(apiMock);
   expect(app).toBeTruthy();
})

test('Health check', async () => {
    process.env.PORT= 3005;
    const app = await start(apiMock);
    //const request = supertest();
    const response = await supertest(app).get('/health');
    expect(response.status).toEqual(200);
});

test('Error check', async () => {
    process.env.PORT= 3006;
    const app = await start(apiMock);
    //const request = supertest();
    const response = await supertest(app).get('/error');
    expect(response.status).toEqual(500);
});

test('Server Stop', async () => {
    const isStopped = await stop();
    expect(isStopped).toBeTruthy();
})