import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme }) => {
  const { pxToRem } = theme.typography;
  return `
      &.MuiButton-text {
        padding: 0;
        margin: 0;
        min-width: auto;
      }
      &.MuiButton-contained {
        font-weight: 600;
        font-size: ${pxToRem(15)};
        line-height: ${pxToRem(18.86)};
        padding-top: ${pxToRem(11)};
        padding-bottom: ${pxToRem(11)};
        &:hover {
          background-color: ${theme.palette.primary.main};
        }
      }
  `;
});

export default StyledButton;
