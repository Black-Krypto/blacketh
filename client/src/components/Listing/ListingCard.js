import React from "react";
import { Grid, Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import ethIcon from '../../ethereum-brands.svg'

const ListingCard = ({src, location}) => {
	return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        alt="House"
        height="300"
        image={src}
      />
      <CardContent>
				<Grid container alignItems="center">
					<LocationOnIcon />
					<p>6834 Breanna Cardill Street</p>
				</Grid>
				<Grid container alignItems="center">
					<BedIcon />
					<p paddingLeft="30px">3 bedrooms</p>
				</Grid>
      </CardContent>
      <CardActions>
        <Button size="small">View Listing</Button>
				<Grid>
					<img width="30px" src={ethIcon} alt="eth" />
				</Grid>
      </CardActions>
    </Card>
  );
}

export default ListingCard