import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#3d4c41',
        },
        secondary: {
            main: '#999999',
        },
    },
    typography:{
        fontFamily: "Helvetica Neue",
    }
});

theme = responsiveFontSizes(theme);

export default theme;