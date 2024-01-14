import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
        },
      },
    },
  },
});
