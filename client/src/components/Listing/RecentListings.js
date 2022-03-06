import React from "react";
import ListingCard from "./ListingCard";
import { Grid } from "@mui/material";
import listing from '../../listing.png';
import styles from './RecentListings.module.css'

const RecentListings = () => {
	return (
		<Grid className={styles.container} container>
			<h2>Our Recent Listings</h2>
			<Grid container >
				<Grid container item xs={4} justifyContent="center">
					<ListingCard src={listing} location="6834 Breanna Cardill Street"/>
				</Grid>
				<Grid container item xs={4} justifyContent="center">
					<ListingCard src={listing} location="6834 Breanna Cardill Street"/>
				</Grid>
				<Grid container item xs={4} justifyContent="center">
					<ListingCard src={listing} location="6834 Breanna Cardill Street"/>
				</Grid>
			</Grid>

		</Grid>
			
	)
}

export default RecentListings