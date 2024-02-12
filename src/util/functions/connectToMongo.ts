import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.DATABASE_URL || "";
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export async function connectToMongo() {
    await client.connect();
}