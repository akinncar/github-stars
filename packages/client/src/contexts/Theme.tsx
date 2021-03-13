import { ThemeProvider } from 'styled-components';

import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';

const Theme = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
);

export default Theme;
