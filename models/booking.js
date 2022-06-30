import mongoose from 'mongoose'


const bookingSchema = new mongoose.Schema({
    // liste deroulante nombre de participants 
    participants:{
        firstName : String,
        lastName : String,
        dob : Date
    }
  })

export default mongoose.model('Booking', bookingSchema);