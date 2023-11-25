import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            sz:0,
            xs: 475,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1240,
            xxl: 1536
        },
    },
    typography: {
        title: {
            fontFamily: [
                'Playfair Display',
                'serif',
            ].join(',')
        },
        paragraph: {
            fontFamily: [
                'Poppins', 'sans-serif'
            ].join(','),
        },
        subtitle: {
            fontFamily: [
                'Cinzel Decorative', 'cursive'
            ].join(','),
        },
    },
});
