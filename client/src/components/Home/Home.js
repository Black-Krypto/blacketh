import React from 'react'
import Search from '../Search/Search';
import logo from '../../logo.png';
import { Grid, Button } from '@mui/material';

const Home = () => {
	return (
		<div>
			<Grid container>
				<Grid container item justifyContent="center" xs={6}>
					<img src={logo} alt="logo"/>
				</Grid>
				<Grid item xs={6}>
					<h1>Invest in your future the smart way</h1>
					<Button>Get Started</Button>
				</Grid>
			</Grid>
		</div>
	)
}

export default Home