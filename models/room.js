import mongoose from 'mongoose'


const roomSchema = new mongoose.Schema({
    image: String,
    name : String,
    price: Number,
    capacity : String,
    description: String,
    disponibility : Boolean,
  })

export default mongoose.model('Room', roomSchema);