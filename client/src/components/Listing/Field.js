import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';

const Field = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword, placeholder, value }) => (
	<Grid item xs={12} sm={half ? 6 : 12}>
		<TextField
					name={name}
					onChange={handleChange}
					placeholder={placeholder}
					variant="filled"
					value={value}
					required
					fullWidth
					label={label}
					autoFocus={autoFocus}
					type={type}
					
				/>
	</Grid>
)

export default Field;