import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import Cards from './Cards'

export default function HomePage() {

  const [rooms, setRooms] = useState([])

  useEffect(()=>{
      getAllRooms()
  },[])

  const getAllRooms = () => {
    fetch('http://localhost:5000/rooms')
    .then((response) => {
        console.log('API CONNECTED')
        return response.json()
    })
    .then((result) => {
        setRooms(result)
        console.log('SET API UPDATE')
        return result
    })
}

useEffect(() => {
  getAllRooms()
    }, [])

return (
    <Grid className='HomeGridHome' container spacing={0} margin-bottom={40}>
            {rooms.map((room) => {
                return(
                    <Grid item xs={4} >
                        <Cards room={room}/>
                    </Grid>
                )
            })}
     </Grid>
)
}
