import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Button from '@components/Button';
import Typography from '@components/Typography';

import StyledGrid from './styles';

const PaymentMethod = ({ image, name, classes }) => (
  <StyledGrid
    className={classes}
    container
    direction='row'
    wrap='nowrap'
    alignItems='center'
    justifyContent='space-between'
  >
    <Grid container direction='row' wrap='nowrap' alignItems='center' justifyContent='flex-start'>
      <Box>
        <img src={image} alt={name} />
      </Box>
      <Typography>{name}</Typography>
    </Grid>
    <Button variant='text'>Change</Button>
  </StyledGrid>
);

PaymentMethod.defaultProps = {
  image: '',
  name: '',
  classes: '',
};

PaymentMethod.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  classes: PropTypes.string,
};

export default PaymentMethod;
