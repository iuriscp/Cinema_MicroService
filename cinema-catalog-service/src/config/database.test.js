import { test, expect } from '@jest/globals';
import { connect, disconnect } from './database.js'; // Note o ".js" obrigatório

    test('connecting database', async () => {
        const connection = await connect();
        expect(connection).toBeTruthy();
    });

    test('disconnecting database', async () => {
        const isDisconnected = await disconnect();
        expect(isDisconnected).toBeTruthy();
    });

    test('2x disconnecting database', async () => {
        await disconnect();
        const isDisconnected = await disconnect();
        expect(isDisconnected).toBeTruthy();
    });