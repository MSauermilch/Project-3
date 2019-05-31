import React, { Component } from "react";
import API from '../../utils/API';
import { Link } from "react-router-dom";
import { Input, TextArea, SubmitBtn } from "../Form";
import DeleteBtn from "../DeleteBtn";
import Banner from '../Banner';
import IngredientInput from '../IngredientInput';
import { List, ListItem } from 'react';
import { Typography, Grid, Paper } from "@material-ui/core";
import './style.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
class TacoForm extends Component {
  state = {
    tacos: [],
    taco_id: "",
    user_id: "",
    taco_type: "",
    review: "",
    restaurant: "",
    rating: "",
    // tacoPhoto: "",
    // location: "",
    lat: "",
    lng: ""
  };

  // componentDidMount() {
  // this.loadTacos();
  // };

  loadTacos = () => {
    API.getTacos()
      .then(res => this.setState({
        tacos: res.data,
        taco_id: "",
        user_id: "",
        taco_type: "",
        review: "",
        restaurant: "",
        rating: "",

        lat: "",
        lng: ""
      }))
      .catch(err => console.log(err));
  };

  deleteTaco = id => {
    API.deleteTaco(id)
      .then(res => this.loadTacos())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log("onclick");
    event.preventDefault();
    if (this.state.taco_id && this.state.user_id && this.state.taco_type && this.state.restaurant && this.state.rating && this.state.review && this.state.lat && this.state.lng) {
      API.saveTaco({
        taco_id: this.state.taco_id,
        user_id: this.state.user_id,
        taco_type: this.state.taco_type,
        rating: this.state.rating,
        review: this.state.review,
        restaurant: this.state.restaurant,
        taco_photo: this.state.taco_photo,
        lat: this.state.lat,
        lng: this.state.lng,
      })
        .then(res => this.loadTacos())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <Paper>
              <Banner><h1>Create your Recipe</h1></Banner>
              <form className="form-container">
                <Typography>Taco Id</Typography>
                <Input
                  value={this.state.taco_id}
                  onChange={this.handleInputChange}
                  name="taco_id"
                  placeholder="taco id"
                />
                <Typography>Taco User</Typography>
                <Input
                  value={this.state.user_id}
                  onChange={this.handleInputChange}
                  name="user_id"
                  placeholder="user id"
                />
                <Typography>Taco Type</Typography>
                <Input
                  value={this.state.taco_type}
                  onChange={this.handleInputChange}
                  name="taco_type"
                  placeholder="taco description"
                />
                <Typography>Taco Review</Typography>
                <TextArea
                  value={this.state.review}
                  onChange={this.handleInputChange}
                  name="review"
                  placeholder="review"
                />
                <Typography>Restaurant</Typography>
                <Input
                  value={this.state.restaurant}
                  onChange={this.handleInputChange}
                  name="restaurant"
                  placeholder="restaurant"
                />
                <Typography>Taco Rating</Typography>
                <Input
                  value={this.state.rating}
                  onChange={this.handleInputChange}
                  name="rating"
                  placeholder="rating"
                />
                <Typography>Location Latitude</Typography>
                <Input
                  value={this.state.lat}
                  onChange={this.handleInputChange}
                  name="latitude"
                  placeholder="latitude"
                />
                <Typography>Location Longitude</Typography>
                <Input
                  value={this.state.lng}
                  onChange={this.handleInputChange}
                  name="longitude"
                  placeholder="longitude"
                />

                {/* <IngredientInput /> */}
                <SubmitBtn
                  // disabled={!(
                  // this.state.taco_id && this.state.user_id && this.state.taco_type && this.state.restaurant && this.state.review && this.state.rating && this.state.lat && this.state.lng)}

                  onClick={this.handleFormSubmit}
                >
                </SubmitBtn>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper>
              <Banner><h1>Recipes</h1></Banner>
              <Grid container spacing={24}>
                {this.state.tacos.length ? (<div>
                  <List>
                    {this.state.tacos.map(taco => (
                      <ListItem key={taco.taco_id}>
                        <Link to={"/tacos/" + taco.taco_id}>
                          <strong>
                            {taco.taco_type} by {taco.user_id}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() =>
                          this.deleteTaco(taco.taco_id)
                        } />
                      </ListItem>
                    ))}
                  </List>
                </div>

                ) : (
                    <h3>No results to be displayed</h3>
                  )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default TacoForm;