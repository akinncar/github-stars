import { createContext, useContext, useEffect, useState } from 'react';
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

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  function changeTheme() {
    if (theme === 'light') {
      localStorage.setItem('@GithubStars:theme', 'dark');
      return setTheme('dark');
    }

    localStorage.setItem('@GithubStars:theme', 'light');
    return setTheme('light');
  }

  return (
    <StyledProvider theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider
        value={{
          changeTheme
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
};

export { ThemeProvider };
