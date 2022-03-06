import React from "react";
import logo from '../../logo_small.png';
import styles from './Header.module.css'
import { Button } from '@mui/material'

const Header = () => {
	return (
		<div className={styles.header}>
			<img style={{width: '150px'}} src={logo} alt="logo" />
			<Button>Connect Wallet</Button>
		</div>
	)
}

export default Header;