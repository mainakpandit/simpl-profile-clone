import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import Typography from '@components/Typography';
import Card from '@components/Card';
import MerchantBadge from '@components/MerchantBadge';
const MerchantsCard = ({ merchantsData, classes }) => (
  <Card className={`${classes} pt-16 pr-0 pl-0`} component='section'>
    <Typography className='grey1 pb-16 pl-24' variant='h3'>
      Use Simpl on 4500+ merchants
    </Typography>
    <Grid
      container
      direction='row'
      alignItems='center'
      justify-content='flex-start'
      wrap='nowrap'
      sx={{ overflowX: 'auto' }}
      className='hide-scrollbar'
    >
      {merchantsData.map(({ name, image, colors }, index) => (
        <MerchantBadge
          key={name}
          image={image}
          name={name}
          colors={colors}
          sx={{ mr: index !== merchantsData.length - 1 ? '4.66px' : '24px', ml: !index && '24px' }}
        />
      ))}
    </Grid>
  </Card>
);

MerchantsCard.defaultProps = {
  merchantsData: [],
  classes: '',
};

MerchantsCard.propTypes = {
  merchantsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      colors: PropTypes.shape({
        backgroundColor: PropTypes.string,
        borderColor: PropTypes.string,
      }),
    }),
  ),
  classes: PropTypes.string,
};

export default MerchantsCard;
