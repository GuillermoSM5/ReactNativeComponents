import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_ligth_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
}

export const ligthTheme: ThemeState = {
  currentTheme: 'ligth',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'white',
    notification: 'teal',
  },
};

export const themeRedcuer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_ligth_theme':
      return {...ligthTheme};
    case 'set_dark_theme':
      return {...darkTheme};
    default:
      return state;
  }
};
