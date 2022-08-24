import { useState } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';

import { Navbar, NavbarButton, Badge } from './styles';

import { icons } from '@constants';

const CustomButtonNavigation = ({ buttonsConfig, defaultSelectedState }) => {
  const [value, setValue] = useState(defaultSelectedState);

  return (
    <Navbar
      showLabels
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      component='nav'
    >
      {buttonsConfig.map(({ label, icon, showBadge }) => (
        <NavbarButton
          key={label}
          label={label}
          icon={
            <Badge variant='dot' invisible={!showBadge}>
              <SvgIcon fontSize='small' viewBox='0 0 20 20'>
                {icons[icon]}
              </SvgIcon>
            </Badge>
          }
        />
      ))}
    </Navbar>
  );
};

CustomButtonNavigation.defaultProps = {
  buttonsConfig: [],
  defaultSelectedState: 0,
};

CustomButtonNavigation.propTypes = {
  buttonsConfig: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
      showBadge: PropTypes.bool,
    }),
  ),
  defaultSelectedState: PropTypes.number,
};

export default CustomButtonNavigation;
