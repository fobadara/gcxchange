import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import right from '../../images/right.svg';

export default function ActionAreaCard({ code, coat, rate }) {
  const styles = {
    card: {
      background: `url(${coat})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '10% 5%',
      backgroundSize: '5em',
      opacity: 1,
    },
    text: {
      paddingTop: '180px',
      paddingLeft: '57%',
      fontFamily: 'Lato, sans-serif',
    },
    primary: {
      color: 'rgb(214, 41, 11)',
    },
    secondary: {
      color: '#fff',
    },
    img: {
      color: '#fff',
      float: 'right',
      margin: '0.5em',
      fontWeight: '500',
    },
  };
  return (
    <Card style={styles.card} id="container" sx={{ minWidth: '100%', height: 250, borderRadius: 0 }}>
      <CardActionArea>
        <img src={right} width="20" style={styles.img} alt="" />
        <CardContent style={styles.text}>
          <Typography gutterBottom style={styles.secondary} variant="p" component="div" color="text.secondary">
            {code}
          </Typography>
          <Typography style={styles.secondary} variant="p" color="text.secondary">
            {rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ActionAreaCard.propTypes = {
  code: PropTypes.string.isRequired,
  coat: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
