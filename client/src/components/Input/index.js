import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextFields from '../IngredientInput';


function InputForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Create your Recipe
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="cocktailName" label="Cocktail Name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="creator" label="Creator" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="garnish" label="Garnish" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default InputForm;