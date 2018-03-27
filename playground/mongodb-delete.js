//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp')
  
  //delete Many
//   db.collection('Users').deleteMany({location:'Miami'}).then((result) =>{
//       console.log(result)
//   })
  //delete One
//   db.collection('Users').deleteOne({location:'Singapore'}).then((result) =>{
//       console.log(result)
//   })

  //find One and Delete

//   db.collection('Users').findOneAndDelete({name:'Lehon'}).then((result)=>{
//       console.log(result)
//   })

  // delete by ID
  db.collection('Todos').findOneAndDelete({
      _id: new ObjectID("5ab79f970b475c5e3fb315cb")
  }).then((result) => {
      console.log(JSON.stringify(result,undefined, 2))
  })
  client.close();
});
