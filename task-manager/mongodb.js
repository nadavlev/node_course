const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'
const userCollection = 'users';
const taskCollection = 'tasks';


MongoClient.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.error('Can not connect to database' + error);
    }
    const db = client.db(databaseName);
    // db.collection(userCollection).insertOne({name: 'Nadav 2', age: 43}).then(response => {
    //     console.log(response.ops);
    // }).catch(error => console.error(error));

    // db.collection(userCollection).insertMany([{name: "shelly", age: 40}, {name: "Alon", age: 8}], (Error,  result) => {
    //     if (error) {
    //         return console.error(error);
    //     }
    //     console.log(result.ops);
    // })

    db.collection(taskCollection).insertMany([
        {name: "First task", isDone: false},
        {name: "Second task", isDone: false},
        {name: "Therd task", isDone: true}
        ], (error, result) => {
        if (error) {
            return console.error(error);
        }
        console.log(result.ops);
    })

})
