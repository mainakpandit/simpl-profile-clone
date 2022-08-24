import PropTypes from 'prop-types';

import StyledCard from './styles';

const Card = ({ children, ...rest }) => <StyledCard {...rest}>{children}</StyledCard>;

Card.defaultProps = {
  children: null,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
