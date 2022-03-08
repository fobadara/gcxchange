import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ code, coat, rate }) {
  const styles = {
    card: {
      background: `linear-gradient(
        rgba(9, 219, 37, 0.5),
        rgba(6, 230, 73, 0.5)
      )`,
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'center',
      // backgroundSize: '50px 50px',
    },
    primary: {
      color: 'rgb(214, 41, 11)',
    },
    secondary: {
      color: '#fff',
    },

    img: {
      width: '4em',
    },
  };
  return (
    <Card style={styles.card} sx={{ maxWidth: 250, height: 250 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="50"
          width="50"
          image={coat}
          alt="Coat of arms"
        /> */}
        <img style={styles.img} src={coat} alt="Coat of arms" />
        <CardContent>
          <Typography gutterBottom style={styles.primary} variant="p" component="div" color="text.secondary">
            (
            {code}
            )
          </Typography>
          <Typography style={styles.secondary} variant="p" color="text.secondary">
            {rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
