import { MongoClient } from 'mongodb';

let client = null;

export async function connect() {
    if (!client) client = new MongoClient(process.env.MONGO_CONNECTION);
    await client.connect();
    return client.db(process.env.DATABASE);
}

export async function disconnect() {
    if (!client) return true;

    await client.close();
    client = null;
    return true;
}