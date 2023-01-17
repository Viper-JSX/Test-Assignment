import { createTheme } from "@mui/material";
import { lineHeight } from "@mui/system";


export const theme = createTheme({
    typography: {
        button: {
          textTransform: 'none'
        },
        fontFamily: "Nunito",
        h1: {
            fontSize: 40,
        }
    },
    
    palette: {
        primary: {
            main: "#F4E041",
        },

        secondary: {
            main: "#00BDD3",
        },
        
        dark:{
            main: "#000000",
        },

        action: {
            disabledBackground: "#B4B4B4"
        }
    }
});