import { createTheme } from "@mui/material";


export const theme = createTheme({
    typography: {
        button: {
          textTransform: 'none'
        }
    },
    
    palette: {
        primary: {
            main: "#F4E041",
        },

        secondary: {
            main: "#00BDD3",
        },
        action: {
            disabledBackground: "#B4B4B4"
        }
    }
});