import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      background: string;
      header: string;
      border: string;
      text: string;
      dark: string;
      white: string;
    };
  }
}