const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://gagansaini:msdhoni@cluster0.sxkoe.mongodb.net/todo')
.then(()=>{
    console.log('database connected successfully')
})
.catch((error)=>{
    console.log('errror occur where connect to database ',error)
})

const todoSchema= new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean,
})

const todo= +












