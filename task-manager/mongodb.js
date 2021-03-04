// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const {MongoClient, ObjectId} = require('mongodb')
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'
const userCollection = 'users';
const taskCollection = 'tasks';

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.error('Can not connect to database' + error);
    }
    const db = client.db(databaseName);
    //delete documents
    // db.collection(userCollection).deleteMany({
    //     age: 8
    // }).then((result) =>
    // console.log(result)
    // ).catch(error => {
    //     console.error(error);
    // });

    // db.collection(taskCollection).deleteOne({
    //     _id: new ObjectId('6040e7a87ffe7d43943feaa8')
    // }).then(result => {
    //         console.log(result);
    // }).catch(error => {
    //     console.error(error);
    // })

    //update
    // db.collection(userCollection).updateOne(
    //     {
    //         _id: new ObjectId('6040e65c9dd0343428a812d8')
    //     },
    //     {
    //         $set: {
    //             name: "Alona"
    //         }
    //     }).then(result => {
    //         console.log(result);
    //     }).catch(err => {
    //     console.error(err);
    //     }
    // );

    // db.collection(taskCollection).updateMany(
    //     {isDone: false},
    //     {$set: {
    //         isDone: true
    //         } }
    // ).then(result => {
    //     console.log(result.modifiedCount);
    // }).catch(error => {
    //     console.error(error);
    // })


    //read - find find one
    // db.collection(userCollection).findOne({_id: new ObjectId('6040e25d132e6c6bccbe75d6')}, (error, user) => {
    //     if (error) {
    //         return console.error(error);
    //     }
    //     console.log(user);
    // });

    // db.collection(userCollection).find({age: 43}).toArray((error, result) => {
    //     console.log(result);
    // })
    //
    // db.collection(userCollection).find({age: 43}).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection(taskCollection).findOne({_id: new ObjectId('6040e7a87ffe7d43943feaa8')}, (error, result) => {
    //     console.log(result);
    // })

    // db.collection(taskCollection).find({isDone: false}).toArray((error, result) => {
    //     console.log(result);
    // })


    //create - insert
    // db.collection(userCollection).insertOne({name: 'Nadav 3', age: 43}).then(response => {
    //     console.log(response.ops);
    // }).catch(error => console.error(error));

    // db.collection(userCollection).insertMany([{name: "shelly", age: 40}, {name: "Alon", age: 8}], (Error,  result) => {
    //     if (error) {
    //         return console.error(error);
    //     }
    //     console.log(result.ops);
    // })

    // db.collection(taskCollection).insertMany([
    //     {name: "First task", isDone: false},
    //     {name: "Second task", isDone: false},
    //     {name: "Therd task", isDone: true}
    //     ], (error, result) => {
    //     if (error) {
    //         return console.error(error);
    //     }
    //     console.log(result.ops);
    // })

})
