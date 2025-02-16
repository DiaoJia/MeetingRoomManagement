import { createTheme } from '@mui/material/styles';
import { green, grey, indigo } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: {
            main: indigo[500],
            normal: indigo['A700'],
        },
        secondary: {
            main: grey[500],
        },
        neutral: {
            light: grey[50],
            medium: grey[200],
            normal: grey[700],
            main: grey[900],
        },
        green: {
            main: green[800],
        }
    },
});

theme = createTheme(theme, {
    typography: {
        link: {
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '0.9rem',
            },
            fontWeight: 500,
            color: theme.palette.primary.neutral,
            display: 'block',
            cursor: 'pointer'
        },
        cardTitle: {
            fontSize: '1.2rem',
            fontWeight: 500,
            display: 'block',
        },
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1rem',
        },
        h7: {
            fontSize: '0.8rem',          
        },
        h8: {
            fontSize: '0.7rem',
        },
    },
});

export default theme;