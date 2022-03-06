import React from 'react'
import { Card, Button, TextField } from '@mui/material'


const Search = () => {
	return (
		<Card>
			<h1>Search for your new home</h1>
			<div>
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				<Button>Search</Button>
			</div>
		</Card>
	)
}

export default Search;
