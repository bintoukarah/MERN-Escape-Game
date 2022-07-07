export default function Rooms() {
    return (
      <main style={{ padding: '1rem 0' }}>
        <h2>Description de la room</h2>
      </main>
    );
  }

//   import * as React from 'react';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Link } from "react-router-dom";


// export default function Cards(props) {
//   return (
//       <Card sx={{ maxWidth: 345,  height: '100%',display: 'flex',flexDirection: 'column',paddingTop: 10, marginLeft: 10, }}>
//       <CardMedia
//         component="img"
//         paddingTop= "56.25%"
//         height="140"
//         image={props.room.image}
//         alt="escape game"
//       />
//       <CardContent >
//         <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center',paddingBottom:3, }}>
//           <strong>{props.room.Name}</strong>
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//          {props.room.Capacity}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//          {props.room.Description}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           <p>{props.room.Price} €</p>
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small"><Link to="Rooms">Share</Link></Button>
//       </CardActions>
//       </Card> 
//   );
// }