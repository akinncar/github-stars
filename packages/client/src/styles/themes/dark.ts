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
      primary: '#21262D',
      secondary: '#388bfd'
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
      hover: '#152A45',
      backgroundClose: 'rgba(56, 139, 253, 0.2)',
      hoverClose: 'rgba(56, 139, 253, 0.3)'
    },

    button: {
      background: {
        primary: '#2ea44f',
        secondary: '#21262d'
      },
      backgroundFocus: {
        primary: '#35b157',
        secondary: '#292f38'
      },
      text: {
        primary: '#FFF',
        secondary: '#FFF'
      },
      border: {
        primary: '#298545',
        secondary: '#30363d'
      }
    },

    modal: {
      background: 'rgba(0, 0, 0, 0.5)',
      headerBackground: '#161B22',
      contentBackground: '#090D13'
    }
  }
};
