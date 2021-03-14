import { createContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { ThemeContextData } from '../types/ThemeTypes';
import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('@GithubStars:theme') || 'light'
  );

  function changeTheme() {
    if (theme === 'light') {
      localStorage.setItem('@GithubStars:theme', 'dark');
      return setTheme('dark');
    }

    localStorage.setItem('@GithubStars:theme', 'light');
    return setTheme('light');
  }

  function getCurrentTheme() {
    if (theme === 'light') {
      return light;
    }

    return dark;
  }

  return (
    <StyledProvider theme={getCurrentTheme()}>
      <ThemeContext.Provider
        value={{
          changeTheme,
          getCurrentTheme
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
};

export { ThemeProvider };
