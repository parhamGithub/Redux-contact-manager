import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        secondary: {
            main: "#43475A",
            dark: "#242834",
            light: "#6272A4"
        },
        primary: {
            main: "#BD93F9",
            light: "#E96EB5",
        },
        success: {
            main: "#3AD274"
        },
        typography: {
            fontFamily: 'Tanha, roboto'
        },
    }
})