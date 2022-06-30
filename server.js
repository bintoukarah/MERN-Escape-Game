import express from 'express';
const app = express();
import Mongoose from 'mongoose';
import User from './models/user.js';
import Room from './models/room.js'
const PORT = 5000;


app.get('/', (req, res) => {
  res.send('hello world server')
})

Mongoose.connect('mongodb+srv://MERNProject:Matrice2022@cluster0.zbesc.mongodb.net/escape-game?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true, 
    // useCreateIndex : true,
    // useFindAndModify :false,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.listen(5000, () => {
  console.log(`Example app listening on port ${PORT}`) //mettre les single cote de la touche 7 vu qu'on a une variable dedans 
})