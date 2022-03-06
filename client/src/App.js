import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import theme from './theme.js'
import CreateListing from './components/Listing/CreateListing';
import MyListing from './components/Listing/MyListing';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'

/*
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
        },
      },
    },
  },
});
*/


function App() {
  return (
		<div>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
				<Header />
					<Routes>
							<Route path="/" element={<Home />}/>
							<Route path="/create" element={<CreateListing />}/>
							<Route path="/mylisting" element={<MyListing />}/>
					</Routes>
				</BrowserRouter>

			</ThemeProvider>

		</div>
  );
}

export default App;
