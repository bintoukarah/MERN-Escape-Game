import express from 'express';
const app = express();
import Mongoose from 'mongoose';

// import routes
import userRoutes from  './routes/userRoutes.js';
import roomRoutes from  './routes/roomRoutes.js';
import bookingRoutes from  './routes/bookingRoutes.js';

const PORT = 5000;


app.use('/users', userRoutes )
app.use('/rooms', roomRoutes )
app.use('/bookings', bookingRoutes )

// curl -d "Name=Test&Disponibility=true&Price=80&Capacity=3&Description=Lorem ipsum" -X POST http://localhost:5000/rooms/

Mongoose.connect('mongodb+srv://MERNProject:Matrice2022@cluster0.zbesc.mongodb.net/escape-game?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true, 
    // useCreateIndex : true,
    // useFindAndModify :false,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`) //mettre les single cote de la touche 7 vu qu'on a une variable dedans 
})