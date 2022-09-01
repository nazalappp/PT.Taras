import { createTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: '#fff'
    },
    secondary: {
      main: '#dc004e',
      contrastText: '#fff'
    },
    error: {
      main: '#f44336',
      contrastText: '#fff'
    },
    warning: {
      main: '#ff9800',
      contrastText: '#fff'
    },
    success: {
      main: '#4caf50',
      contrastText: '#fff'
    },
    info: {
      main: '#2196f3',
      contrastText: '#fff'
    },
    background: {
      default: '#f5f5f5'
    }
  },
  typography: {
    fontFamily: `"Inter Light", "Inter Regular"`,
    button: {
      textTransform: 'none'
    }
  }
})

export default theme
