import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => {
  const { pxToRem } = theme.typography;
  return `
    &.MuiTypography-body1  {
      color: ${theme.palette.common.white};
      font-weight: 400;
      font-size: ${pxToRem(12)};
      line-height: ${pxToRem(12)};
      text-transform: none;
    }
    &.MuiTypography-subtitle1 {
      color: ${theme.palette.common.white};
      font-weight: 400;
      font-size: ${pxToRem(16)};
      line-height: ${pxToRem(16)};
      text-transform: none;

      .MuiSvgIcon-root {
        width: 6px;
        height: 9px;
        margin-left: ${pxToRem(6)}
      }
    }
    &.MuiTypography-h1 {
      font-weight: 400;
      font-size: ${pxToRem(36)};
      line-height: ${pxToRem(45)};

      .currency {
        font-size: ${pxToRem(32)};
      }
    }
    &.MuiTypography-h2 {
      font-weight: 400;
      font-size: ${pxToRem(16)};
      line-height: ${pxToRem(16)};
    }
    &.MuiTypography-h3 {
      font-weight: 400;
      font-size: ${pxToRem(12)};
      line-height: ${pxToRem(10)};
    }
    &.MuiTypography-paragraph {
      font-weight: 400;
      font-size: ${pxToRem(12)};
      line-height: ${pxToRem(15)};
    }
    &.MuiTypography-paragraph.variant1 {
      font-weight: 400;
      font-size: ${pxToRem(14)};
      line-height: ${pxToRem(18)};
      margin: 0;
    }
    &.shadow {
      text-shadow: ${theme.shadows.textShadow1};
    }

    &.opacity56 {
      opacity: 56%;
    }
  `;
});

export default StyledTypography;
