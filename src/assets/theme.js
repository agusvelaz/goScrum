import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#201f23',
      main: '#131313',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffff59',
      main: '#ff7600',
      dark: '#959595',
      contrastText: '#000000',
    },

  },
  typography:{
    fontFamily: " 'Roboto','Montserrat', 'Helvetica', 'Arial', sans-serif"
  }
});


export default theme;