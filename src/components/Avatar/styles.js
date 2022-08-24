import MuiAvatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const StyledAvatar = styled(MuiAvatar)(({ theme }) => {
  const { pxToRem } = theme.typography;
  return `
    background-color: ${theme.palette.primary.main};
    border: 1px solid ${theme.palette.common.white};
    font-weight: 600;
    font-size: ${pxToRem(12)};
  `;
});

export default StyledAvatar;
