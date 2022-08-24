import PropTypes from 'prop-types';
import StyledAvatar from './styles';

const Avatar = ({ alt, children, variant, src, height, width, ...rest }) => (
  <StyledAvatar sx={{ height, width }} alt={alt} src={src} variant={variant} {...rest}>
    {children}
  </StyledAvatar>
);

Avatar.defaultProps = {
  alt: '',
  children: <></>,
  variant: 'circular',
  src: '',
  height: 30,
  width: 30,
};

Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Avatar;
