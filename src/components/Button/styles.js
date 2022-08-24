import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme }) => {
  console.log(theme, '+++++');
  return `
      &.MuiButton-text {
        padding: 0;
        margin: 0;
        min-width: auto;
      }
  `;
});

export default StyledButton;
