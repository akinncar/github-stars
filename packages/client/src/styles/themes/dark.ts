import { ThemeType } from '../../types/ThemeTypes';

export const dark: ThemeType = {
  colors: {
    primary: '#ffffff',
    secondary: '#36313D',

    background: {
      primary: '#0D1117',
      secondary: '#090D13',
      alternative: '#161B22'
    },

    border: {
      primary: '#21262D'
    },

    text: {
      primary: '#c9d1d9',
      secondary: '#24292e',
      link: '#58a6ff',
      title: '#ffffff',
      span: '#8b949e'
    },

    tag: {
      text: '#58a6ff',
      background: 'rgba(56, 139, 253, 0.1)',
      hover: '#152A45'
    },

    button: {
      background: {
        primary: '#2ea44f'
      },
      backgroundFocus: {
        primary: '#35b157'
      },
      text: {
        primary: '#FFF'
      },
      border: {
        primary: '#298545'
      }
    },

    modal: {
      background: 'rgba(0, 0, 0, 0.5)',
      contentBackground: '#161B22',
      headerBackground: '#090D13'
    }
  }
};
