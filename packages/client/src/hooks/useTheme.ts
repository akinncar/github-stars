import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';
import { ThemeContextData } from '../types/ThemeTypes';

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme need a ThemeProvider');
  }
  return context;
}
