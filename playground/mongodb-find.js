//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp')


  //db Find
  // db.collection('Todos').find({
  //   _id:new ObjectID('5ab79f970b475c5e3fb315cb')}).toArray().then((docs) =>{
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs,undefined,2))
  // },(err) =>{
  //   console.log('Unable to fetch todos', err)
  // })

  //Count DB
  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`)
  // },(err) =>{
  //   console.log('Unable to fetch todos', err)
  // })

  //Find DB use Users

  db.collection('Users').find({name: 'Lehon'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2))
  })
  client.close();
});
