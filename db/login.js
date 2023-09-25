import { MongoClient } from 'mongodb';

async function login(link, databaseName, collectionName, object) {
    const client = new MongoClient(link);
    
    try {
        await client.connect();
        
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        // Check if a record with the provided email and password exists
        const result = await collection.findOne({ email: object.email, password: object.password });

        if (result) {
            // If a matching record is found, return the name and email
            return { name: result.name, email: result.email };
        } else {
            // If no matching record is found, return null or an error message
            return null;
        }
    } finally {
        // Ensure that the client is always closed, even if an error occurs
        client.close();
    }
}

export default login;
