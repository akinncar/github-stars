export interface BackgroundColorsType {
  primary: string;
  secondary: string;
  alternative: string;
}

export interface BorderColorsType {
  primary: string;
}

export interface TextColorsType {
  primary: string;
  secondary: string;
  link: string;
  title: string;
  span: string;
}

export interface TagColorsType {
  text: string;
  background: string;
  hover: string;
}

export interface ButtonColorsType {
  background: ButtonColorsBackgroundType;
  backgroundFocus: ButtonColorsBackgroundFocusType;
  text: ButtonColorsTextType;
  border: ButtonColorsBorderType;
}
export interface ButtonColorsBackgroundType {
  primary: string;
}

export interface ButtonColorsBackgroundFocusType {
  primary: string;
}
export interface ButtonColorsTextType {
  primary: string;
}

export interface ButtonColorsBorderType {
  primary: string;
}

export interface ModalColorsType {
  background: string;
  contentBackground: string;
  headerBackground: string;
}
export interface ColorsType {
  primary: string;
  secondary: string;
  background: BackgroundColorsType;
  border: BorderColorsType;
  text: TextColorsType;
  tag: TagColorsType;
  button: ButtonColorsType;
  modal: ModalColorsType;
}
export interface ThemeType {
  colors: ColorsType;
}

export interface ThemeContextData {
  changeTheme(): void;
  getCurrentTheme(): ThemeType;
}
