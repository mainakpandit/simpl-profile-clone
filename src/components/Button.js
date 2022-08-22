import { useTheme } from '@mui/material/styles';
const Button = () => {
  const theme = useTheme();
  console.log(theme);
  return <button>Button</button>;
};

export default Button;
