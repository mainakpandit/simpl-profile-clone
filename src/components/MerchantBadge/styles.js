import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledMerchantBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'colors',
})(({ colors, theme }) => {
  const { pxToRem } = theme.typography;
  return `
    border: 0.5px solid ${colors.borderColor};
    border-radius: 13.48px;
    display: inline-block;
    background-color: ${colors.backgroundColor};
    width: ${pxToRem(62.34)};
    padding: ${pxToRem(9.61)} 0 ${pxToRem(11.53)};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .merchant-image {
      height: ${pxToRem(42.12)};
      width: ${pxToRem(42.12)};
      border-radius: 50%;
      overflow: hidden;
    }
    img {
      aspect-ratio: 1/1;
      max-width: 100%;
    }
    .MuiTypography-paragraph {
      color: ${theme.palette.grey.grey2};
      text-align: center;
      font-weight: 600;
      font-size: ${pxToRem(10)};
      line-height: ${pxToRem(13)};
      margin: ${pxToRem(5.61)} 0 0 0;
    }
  `;
});

export default StyledMerchantBadge;
