import { createTheme } from '@mui/material/styles'

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
					backgroundColor: '#5271FF',
					color: 'white',
					borderRadius: 0,
          fontSize: '1rem',
					textTransform: 'none',
					textDecoration: 'none',
        },
      },
    },
  },
});