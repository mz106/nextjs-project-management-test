import mongoose from 'mongoose'

export default function connection () {
    console.log(process.env.DB_STRING)
    mongoose.connect('mongodb+srv://michael:rxCc3MTIygA6GMx3@cluster0.jfndx.mongodb.net/testTodo?retryWrites=true&w=majority');
    console.log('connected to db')
}

connection()

