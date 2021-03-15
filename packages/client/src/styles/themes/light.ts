import { ThemeType } from '../../types/ThemeTypes';

export const light: ThemeType = {
  colors: {
    primary: '#000000',
    secondary: '#36313D',

    background: {
      primary: '#FFF',
      secondary: '#fafbfc',
      alternative: '#F6F8FA'
    },

    border: {
      primary: '#d1d5da'
    },

    text: {
      primary: '#000',
      secondary: '#24292e',
      link: '#0366d6',
      title: '#000',
      span: '#6a737d'
    },

    tag: {
      text: '#0366d6',
      background: '#f1f8ff',
      hover: '#DDEEFF',
      backgroundClose: '#d6eaff',
      hoverClose: '#bedaf7'
    },

    button: {
      background: {
        primary: '#2ea44f',
        secondary: '#fafbfc'
      },
      backgroundFocus: {
        primary: '#2a9b4a',
        secondary: '#f1f8ff'
      },
      text: {
        primary: '#FFF',
        secondary: '#24292e'
      },
      border: {
        primary: '#298545',
        secondary: 'rgba(27, 31, 35, 0.15)'
      }
    },

    modal: {
      background: 'rgba(0, 0, 0, 0.5)',
      contentBackground: '#ffffff',
      headerBackground: '#f6f8fa'
    }
  }
};
