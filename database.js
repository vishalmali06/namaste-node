const { MongoClient } = require('mongodb');
// const url = "mongodb+srv://vishalmali06:<GAktAIfWEhU1QUer>@namastenode.ypdqp.mongodb.net/"
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);
const dbName = 'HelloWorld';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    const data = {
        firstname: "Ajinkya",
        lastname: "Shinde",
        city: "Kolhapur",
        Phone: "8888888888"
    }

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    // const countResult = await collection.countDocuments({})
    // console.log("Count of document in User collection => ", countResult);

    const result = await collection.find({ firstname: "Ajinkya" }).toArray();
    console.log(result.length)
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());