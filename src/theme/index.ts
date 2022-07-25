import { createTheme } from "./createTheme";
import { palette } from "./palette";
import initTypography from "./typograhy";

// Create a theme instance.
const theme = createTheme({
  palette
});

theme.typography = initTypography(theme);

export default theme;
