import mongoose from 'mongoose'


const bookingSchema = new mongoose.Schema({
  numberParticipants : {
    type :Number,
    required: true,
    maxLenght : 8,
    minLenght: 2
  },
  participants:{
        firstName : String,
        lastName : String,
        dob : Date
    }
  })
export default mongoose.model('Booking', bookingSchema);