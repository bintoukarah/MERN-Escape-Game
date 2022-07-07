
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "../Pages/Cards.css"


export default function Cards(props) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 10, marginLeft: 10, }}>
      <CardMedia
        component="img"
        paddingTop="56.25%"
        height="200"
        image={props.room.Image}
        alt="escape game"
      />
      <CardContent >
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: 'center', paddingBottom: 3 }}
        >
          <Link to="Rooms" className='remove_textD'><strong>{props.room.Name}</strong></Link>
        </Typography>
      </CardContent>
    </Card>
  );
}