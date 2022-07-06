
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Cards(props) {

  return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.room.image}
        alt="escape game"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.room.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.room.Capacity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.room.Description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{props.room.Price} €</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card> 
  );
}




