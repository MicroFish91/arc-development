import { createTheme } from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
  palette: createPalette({
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  }),
  typography: {
    h3: {
      fontweight: 300,
    },
  },
});
