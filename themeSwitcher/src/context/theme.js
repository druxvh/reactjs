import { useContext, createContext } from "react";

export const theme = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = theme.Provider;

export default function useTheme() {
  return useContext(theme);
}
