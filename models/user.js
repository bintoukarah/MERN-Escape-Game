import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    firstname: String,
    lastname : String,
    email : String,
    password : String,
    admin : Boolean 
  })

export default mongoose.model('User', userSchema);