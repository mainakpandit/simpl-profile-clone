import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MuiBadge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const Navbar = styled(BottomNavigation)(({ theme }) => {
  return `
    box-shadow: ${theme.shadows.navbarShadow};
    background-color: ${theme.palette.common.white};
    position: relative;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${theme.palette.grey.grey5};
    }
  `;
});

const NavbarButton = styled(BottomNavigationAction)(({ theme }) => {
  const { pxToRem } = theme.typography;
  return `
    position: relative;
    .Mui-selected::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${theme.palette.primary.main};
      z-index: 2;
    }
    .MuiBottomNavigationAction-label,
    .MuiBottomNavigationAction-label.Mui-selected {
      font-weight: 400;
      margin-top: ${pxToRem(6)};
      font-size: ${pxToRem(10)};
      line-height: ${pxToRem(13)};
    }
    .MuiTouchRipple-root {
      display: none;
    }
  `;
});

const Badge = styled(MuiBadge)(({ theme }) => {
  return `
    .MuiBadge-badge {
      border: 2px solid ${theme.palette.common.white};
      background-color: ${theme.palette.error.main};
      transform: scale(1) translate(18%, -50%);
    }
  `;
});

export { Navbar, NavbarButton, Badge };
