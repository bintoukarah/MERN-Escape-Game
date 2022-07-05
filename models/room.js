import mongoose from 'mongoose'


const roomSchema = new mongoose.Schema({
    Name : String,
    Price: Number,
    Capacity : Number,
    Description: String,
    Disponibility : Boolean
  })

export default mongoose.model('Room', roomSchema);