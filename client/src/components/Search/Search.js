import React from 'react'
import styles from './Search.module.css'
import { Grid, Card, Button, TextField, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MonetizationOn from '@mui/icons-material/MonetizationOn';

const Search = () => {
	return (
		<Card className={styles.search} elevation={5}>
			
			<h2 className={styles.headerText} >Search for your new home</h2>
			<Grid className={styles.inputGrid} container justifyContent="center">
				<Grid container item xs={3.5} alignItems="center">
					<LocationOnIcon fontSize="large"/>
					<TextField className={styles.field} id="outlined-basic" label="location" variant="outlined" />
				</Grid>
				<Grid container item xs={3.5} alignItems="center">
					<HomeIcon fontSize="large"/>
					<TextField className={styles.field} id="outlined-basic" label="Type" variant="outlined" />
				</Grid>
				<Grid container item xs={3.5} alignItems="center">
					<MonetizationOn fontSize="large"/>
					<TextField className={styles.field} id="outlined-basic" label="Budget" variant="outlined" />
				</Grid>
				<Grid container item xs={1.5}>
					<Button className={styles.searchButton}>Search</Button>
				</Grid>
			</Grid>
		</Card>
	)
}

export default Search;
