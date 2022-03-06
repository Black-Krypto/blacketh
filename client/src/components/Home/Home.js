import React from 'react'
import Search from '../Search/Search';
import logo from '../../logo.png';
import styles from './Home.module.css'
import RecentListings from '../Listing/RecentListings';
import { Grid, Button } from '@mui/material';

const Home = () => {
	return (
		<div>
			<Grid className={styles.hero} container>
				<Grid className={styles.logoContainer} container item justifyContent="center" xs={6}>
					<img className={styles.logo} src={logo} alt="logo"/>
				</Grid>
				<Grid className={styles.text} item xs={6}>
					<h1>Invest in your future the smart way</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mi purus. Maecenas nec ante condimentum, porta dui et, mattis odio. </p>
					<br></br>
					<br></br>
					<Button>Get Started</Button>
				</Grid>
			</Grid>

			<Grid container justifyContent="center">
				<Search />
			</Grid>

			<Grid container>
				<h2 className={styles.listingText}>Recent Listings</h2>
				<RecentListings />
			</Grid>

		</div>
	)
}

export default Home