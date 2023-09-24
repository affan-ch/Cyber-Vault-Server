import { MongoClient } from 'mongodb';

async function signup(link, databaseName, collectionName, object){
    const client = new MongoClient(link);
    await client.connect();
    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(object);
    client.close();
    return result;
}

export default signup;