import React from "react";
import logo from '../../logo_small.png';
import userImg from '../../user.png';
import styles from './Header.module.css';
import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
	const dispatch = useDispatch();

	const user = useSelector(state => state.auth);

	const handleClick = (e) => {
		e.preventDefault();
		dispatch({type: 'CONNECT', payload: true});
	}
	return (
		<div className={styles.header}>
			<Grid className={styles.grid} alignItems="center" container >
				<Grid item xs={2}>
					<a href="/">
						<img className={styles.logo} src={logo} alt="logo" />
					</a>
				</Grid>
				<Grid item xs={1.5}>
					<a href="/mylisting">
						<Button style={{color: 'black', backgroundColor: 'white', textDecoration: 'none'}} variant="text">My Listings</Button>
					</a>
				</Grid>
				<Grid item xs={1.5}>
					<a href="/create">
						<Button style={{textDecoration: 'none', color: 'black', backgroundColor: 'white'}} variant="text">Create Listing</Button>
					</a>
				</Grid>
				<Grid item xs={1.5}>
					<Button style={{color: 'black', backgroundColor: 'white'}} variant="text">Investment Tools</Button>
				</Grid>
				<Grid container item justifyContent="flex-end" xs={5.5}>
					<Grid item style={{paddingRight: '100px'}}>
					{user.connected ? 
						<img width="50px" src={userImg} alt="User Img" /> : 
						<Button onClick={handleClick}>Connect Wallet</Button>
					}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Header;