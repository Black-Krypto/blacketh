import React from 'react';
import RecentListing from './RecentListings';
import { Grid, Button } from '@mui/material';
import styles from './MyListing.module.css';

const MyListing = () => {

	return (
		<Grid>
			<Grid className={styles.container}>
				<h2 className={styles.largeText}>My Listings</h2>
				<p>Create and manage listings and certificates</p>
				<br></br>
				<Button href="/create">Create a Listing</Button>
			</Grid>
			<RecentListing />
		</Grid>
	)
}

export default MyListing;