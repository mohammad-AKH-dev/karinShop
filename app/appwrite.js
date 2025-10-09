import { Client, Account , Databases} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68d9c1310021e1181595'); // Replace with your project ID

const Database = new Databases(client)

export const account = new Account(client);

export { Database }

export { ID } from 'appwrite';
