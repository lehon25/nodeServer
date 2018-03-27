//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp')
  

  //update users by ID only one
// db.collection('Todos').findOneAndUpdate({
//     _id : new ObjectID('5ab7b43479d3e201b8394712')
// }, {
//     $set:{
//         completed: true
//     }
// },{
//     returnOriginal:false
// }).then((result) =>{
//     console.log(result)
// })

//Update Users multi 
db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5ab79fbc63f0415e7d5ae7d2')
},{
    $set : {
        name: 'Lehon',
        location: 'Jakarta Pusat'
    },
    $inc : {
        age : 2
    }
},{
    returnOriginal:'Lehon'
}).then((result)=>{
    console.log(result)
})
  client.close();
});
