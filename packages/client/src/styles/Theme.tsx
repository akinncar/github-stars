import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#000',
    secondary: '#36313D'
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
