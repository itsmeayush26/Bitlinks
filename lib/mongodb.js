
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(" Please add your Mongo URI to .env.local");
}

// Removed deprecated useNewUrlParser (no longer needed in v5+)
const options = {};

let client;
let clientPromise;

// Added dev-mode global variable handling to prevent multiple connections
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
