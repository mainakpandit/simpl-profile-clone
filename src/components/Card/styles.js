import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const StyledCard = styled(MuiCard)(({ theme }) => {
  const { pxToRem } = theme.typography;
  return `
    padding: ${pxToRem(20)} ${pxToRem(24)};
    border-radius: 12px;
  `;
});

export default StyledCard;
