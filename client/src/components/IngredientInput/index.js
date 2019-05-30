import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './style.css';

const styles = theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    border: 'solid 1px',
    borderRadius: '5px',
    width: 500,
    margin: 30,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textFieldMedium: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100
  },
  textFieldSmall: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 60,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const taco_type = [
  {
    value: 'tex-mex',
    label: 'tex-mex',
  },
  {
    value: 'border',
    label: 'border',
  },
  {
    value: 'interior',
    label: 'interior',
  }, {
    value: 'veggie',
    label: 'veggie',
  },
  {
    value: 'pork',
    label: 'pork',
  },
  {
    value: 'fish',
    label: 'fish',
  },
  {
    value: 'beef',
    label: 'beef',
  },
  {
    value: 'chicken',
    label: 'chicken',
  },
  {
    value: 'other',
    label: 'other',
  },
];

const rating = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
];

class IngredientInput extends React.Component {
  state = {
    user_id: 'C7',
    taco_id: '2GG',
    taco_type: 'border',
    restaurant: 'Betos',
    rating: 3,
    review: 'great',
    lat: 32342342,
    lng: 43244234,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container} noValidate autoComplete="off">
        <Typography variant="h6" gutterBottom>
          User id
      </Typography>
        <TextField
          required id="user_id"
          label="User"
          // placeholder="multiline"
          multiline
          className={classes.textField}
          margin="normal"
          value={this.state.user_id}
          onChange={this.handleInputChange}
        // fullWidth 
        />

        <Typography variant="h6" >
          Taco id
      </Typography>
        <TextField
          required id="taco_id"
          label="Taco id"
          placeholder="taco id"
          multiline
          className={classes.textField}
          margin="normal"
          value={this.state.taco_id}
          onChange={this.handleInputChange}
        />

        <Typography variant="h6">
          Taco Type
      </Typography>
        <TextField
          id="standard-select-taco_type"
          select
          label="Select"
          className={classes.textFieldMedium}
          value={this.state.taco_type}
          onChange={this.handleChange('taco_type')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your taco type"
          margin="normal"

        >
          {taco_type.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant="h6" gutterBottom>
          Restaurant
      </Typography>
        <TextField
          required id="restaurant"
          label="Restaurant"
          // placeholder="multiline"
          multiline
          className={classes.textField}
          margin="normal"
        />

        <Typography variant="h6" gutterBottom>
          Review
      </Typography>
        <TextField
          required id="standard-textarea"
          label="Review"
          placeholder="Review"
          multiline
          className={classes.textField}
          margin="normal"
        />

        <Typography variant="h6" gutterBottom>
          Rating
      </Typography>
        <TextField
          id="standard-select-rating"
          select
          label="Select"
          className={classes.textFieldMedium}
          value={this.state.rating}
          onChange={this.handleChange('rating')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your rating"
          margin="normal"
        >
          {rating.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant="h6" gutterBottom>
          Latitude
      </Typography>
        <TextField
          required id="lat"
          label="Latitude"
          placeholder="Latitude"
          multiline
          className={classes.textFieldMedium}
          margin="normal"
        />

        <Typography variant="h6" gutterBottom>
          Longitude
      </Typography>
        <TextField
          required id="lng"
          label="Longitude"
          placeholder="Longitude"
          multiline
          className={classes.textField.textFieldMedium}
          margin="normal"
        />
      </div>
    );
  }
}

IngredientInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IngredientInput);
