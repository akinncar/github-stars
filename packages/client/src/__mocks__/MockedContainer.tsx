import { ThemeProvider as StyledProvider } from 'styled-components';
import { ThemeContext } from '../contexts/Theme';
import { light } from '../styles/themes/light';

export default function MockedContainer({ children }) {
  return (
    <ThemeContext.Provider
      value={{
        changeTheme: () => {},
        getCurrentTheme: () => light
      }}
    >
      <StyledProvider theme={light}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}
