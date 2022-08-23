import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MainLayoutContainer = styled(Box)(({ theme }) => {
  const { pxToRem } = theme;
  return `
    min-height: 100vh;
    max-width: ${pxToRem(360)};
    margin: 0 auto;
    position: relative;
    background-color: ${theme.palette.background.default};
    padding: ${pxToRem(40)} ${pxToRem(24)} ${pxToRem(24)};
    & > .MuiBox-root {
      position: relative;
      z-index: 1;
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
  `;
});

export { MainLayoutContainer };
