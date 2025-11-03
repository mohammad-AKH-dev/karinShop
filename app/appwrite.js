import { Client, Account , Databases, Storage} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68d9c1310021e1181595'); // Replace with your project ID

const Database = new Databases(client)

const storage = new Storage(client)

export const account = new Account(client);

export { Database , storage}

export { ID } from 'appwrite';
