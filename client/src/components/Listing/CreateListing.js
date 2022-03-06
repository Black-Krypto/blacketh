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
		<Grid className={styles.container} container direction="column" justifyContent="center" alignItems="center">

		<Grid item>
			<h2 className={styles.text}>Create Listing</h2>
		</Grid>
		<form className={styles.container} onSubmit={handleSubmit}>

		<Grid item>
			<p>Upload Pictures *</p>
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
		</Grid>

		<br></br>
		<br></br>

		<Grid item>
			<p>Upload Certification *</p>
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
		</Grid>

	<br></br>
	<br></br>
	<Grid item>
		<Field name="firstName" label="Address" handleChange={handleChange} autoFocus/>
	</Grid>
	<br></br>
	<br></br>
		<Grid container spacing={5}>
			<Field name="firstName" label="Country" handleChange={handleChange} autoFocus half />
			<Field name="lastName" label="Postal Code" handleChange={handleChange} autoFocus half />
		</Grid>
		<br></br>
		<br></br>
		<Grid container spacing={5}>
			<Field name="firstName" label="Type" handleChange={handleChange} autoFocus half />
			<Field name="lastName" label="Starting Price" handleChange={handleChange} autoFocus half />
		</Grid>
		<br></br>
		<br></br>
		<Grid container>
			<TextField 
				style={{width: '100%'}}
				id="filled-multiline-static"
				label="Listing Description"
				multiline
				rows={4}
				defaultValue="Default Value"
				variant="filled"
			/>
		</Grid>
		<br></br>
		<br></br>
		<Button >Create</Button>
		</form>
	</Grid>
	)
}

export default CreateListing