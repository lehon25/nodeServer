var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express()
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
    //console.log(req.body)
    var todo = new Todo({
        text:req.body.text
    })
    todo.save().then((doc) =>{
        res.send(doc)
    },(e) => {
        res.status(400).send(e)
    })

})
app.listen(3000, () => {
    console.log('Started on port 3000')
})
// var mongoose = require('mongoose')

// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost:27017/TodoApp')

//save new something
// var Todo = mongoose.model('Todo',{
//     text:{
//     type: String,
//     required: true,
//     minlength: 1,
//     trim :true
//     },
//     completed:{
//     type: Boolean,
//     default: false
//     },
//     completedAt:{
//     type: Number,
//     default : null
//     }
// })

// var newTodo = new Todo({
//     text: 'Cook dinner'
// })

// newTodo.save().then((doc) =>{
// console.log('Saved todo', doc)
// },(e) =>{
//     console.log('Unable to save todo')
// })

// var otherTodo = new Todo({
//     text:'Something to do'
// })

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2))
// },(e) =>{
//     console.log('Unable to save', e)
// })

//User 
//Email- required it - trim it - set Type - set min length of 2
// var User = mongoose.model('User',{
//     email:{
//         type:String,
//         required:true,
//         trim: true,
//         minlength: 1
//     }
// })

// var user = new User({
//     email: 'lehon_25@yahoo.com '

// })
// user.save().then((doc)=> {
// console.log('User saved', doc)
// },(e)=>{
// console.log('Unable to save user',e)
// })
