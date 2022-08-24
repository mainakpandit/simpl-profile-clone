import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import Button from '@components/Button';
import Typography from '@components/Typography';

import StyledGrid from './styles';

const PaymentMethod = ({ image, name, isLoading, classes }) => (
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
        {isLoading ? (
          <Skeleton variant='circular' width={26} height={26} />
        ) : (
          <img src={image} alt={name} />
        )}
      </Box>
      {isLoading ? (
        <Skeleton variant='rounded' width={52} height={12} />
      ) : (
        <Typography>{name}</Typography>
      )}
    </Grid>
    {isLoading ? (
      <Skeleton variant='rounded' width={52} height={15} />
    ) : (
      <Button variant='text'>Change</Button>
    )}
  </StyledGrid>
);

PaymentMethod.defaultProps = {
  image: '',
  name: '',
  classes: '',
  isLoading: true,
};

PaymentMethod.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  classes: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default PaymentMethod;
