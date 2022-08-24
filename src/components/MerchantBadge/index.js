import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Typography from '@components/Typography';
import StyledMerchantBadge from './styles';

const MerchantBadge = ({ name, image, colors, ...rest }) => (
  <StyledMerchantBadge {...rest} colors={colors}>
    <Box className='merchant-image'>
      <img src={image} alt={name} />
    </Box>
    <Typography paragraph>{name}</Typography>
  </StyledMerchantBadge>
);

MerchantBadge.defaultProps = {
  name: '',
  image: '',
  colors: { backgroundColor: '#fff', borderColor: '#fff' },
};

MerchantBadge.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  colors: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
  }),
};

export default MerchantBadge;
