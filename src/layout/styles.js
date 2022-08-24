import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MainLayoutContainer = styled(Box)(({ theme }) => {
  const { pxToRem } = theme.typography;
  return `
    max-width: ${pxToRem(360)};
    margin: 0 auto;
    position: relative;
    background-color: ${theme.palette.background.default};
    min-height: 100vh;
    & > .MuiBox-root {
      position: relative;
      z-index: 1;
      padding: ${pxToRem(40)} ${pxToRem(24)} ${pxToRem(114)};
      min-height: 100%;
    }
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: ${pxToRem(208)};
      background-color: ${theme.palette.primary.main};
    }
    .MuiBottomNavigation-root {
      position: fixed;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      max-width: ${pxToRem(360)};
    }
  `;
});

export default MainLayoutContainer;
