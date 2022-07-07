import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function OneRoom() {
  let params = useParams();
  let roomId = params._id;

  const [room, setRoom] = useState([])

  useEffect(() => {
    getOneRoom()
  }, [])

  const getOneRoom = () => {
    fetch(`http://localhost:5000/rooms/${roomId}`)
      .then((response) => {
        console.log('API CONNECTED')

        return response.json()
      })
      .then((result) => {
        setRoom(result)
        console.log('SET API UPDATE')
      })
  }

  return (
    <main style={{ padding: '1rem 0' }}>
      <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 10, marginLeft: 10, }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={room.Image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <CardContent >
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingBottom: 3, }}>
                <strong>{room.Name}</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p><strong>Nombre de participant : </strong>{room.Capacity} </p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p><strong>Prix : </strong>{room.Price} €</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {room.Description}
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <CardActions>
              <Button size="small"><Link to="Booking">Share</Link></Button>
            </CardActions>
          </Box>
        </Box>
      </Card>
    </main>
  )
}