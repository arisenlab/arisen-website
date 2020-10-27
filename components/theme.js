import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#035B96",
        },
        secondary: {
            main: "#333333",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        button: {
            textTransform: "none",
        },
        h1: {
            fontSize: "5rem",
            fontFamily: "Source Sans Pro",
            fontWeight: 900,
        },
        h2: {
            fontFamily: "Source Sans Pro",
            fontWeight: 900,
        },
        h3: {
            fontFamily: "Source Sans Pro",
            fontWeight: 700,
        },
        h4: {
            fontFamily: "Source Sans Pro",
            fontWeight: 700,
        },
        h5: {
            fontFamily: "Source Sans Pro",
            fontWeight: 600,
        },
        h6: {
            fontFamily: "Source Sans Pro",
            fontWeight: 400,
        },
        fontFamily: "Source Sans Pro",
        fontWeight: 300,
    },
});

export default responsiveFontSizes(theme);
