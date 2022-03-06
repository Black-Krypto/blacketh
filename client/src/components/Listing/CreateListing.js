import React, {useState} from "react";
import { Grid, Button, TextField } from "@mui/material";
import Field from "./Field";
import styles from './CreateListing.module.css'

const initialState = {}

const CreateListing = () => {

	const [formData, setFormData] = useState(initialState)
	const handleChange = (e) => {
		setFormData({...formData, [e.target.name] : e.target.value})
	}

	const handleSubmit = () => {

	}
	
	return (
		<Grid className={styles.container} container justifyContent="center" alignItems="center">

			<form className={styles.container} onSubmit={handleSubmit}>
					<Button
		variant="contained"
		component="label"
	>
		Upload File
		<input
			type="file"
			hidden
		/>
	</Button>
		<Grid container>
			<Field name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
			<Field name="lastName" label="Last Name" handleChange={handleChange} autoFocus half />
		</Grid>
		<Grid container>
			<TextField 
				id="filled-multiline-static"
				label="Multiline"
				multiline
				rows={4}
				defaultValue="Default Value"
				variant="filled"
			/>
		</Grid>
			</form>
		</Grid>
	)
}

export default CreateListing