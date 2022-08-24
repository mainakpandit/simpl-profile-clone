import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const StyledGrid = styled(Grid)(({ theme }) => {
  const { pxToRem } = theme.typography;
  return `
    .MuiBox-root {
      width: ${pxToRem(26)};
      height: ${pxToRem(26)};
      border-radius: 50%;
    }
    img {
      max-width: 100%;
      aspect-ratio: 1/1;
    }
    p.MuiTypography-body1 {
      font-weight: 400;
      font-size: ${pxToRem(18)};
      line-height: ${pxToRem(12)};
      color: ${theme.palette.grey.grey2};
      margin-left: ${pxToRem(6.3)};
    }
  `;
});

export default StyledGrid;
