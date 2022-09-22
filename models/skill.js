import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const skillSchema = new Schema ({
  text: String,
  obtain: Boolean,
})


const Todo = mongoose.model('Todo', todoSchema)

export {
  Todo
}