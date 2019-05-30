import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteBtn from "../components/DeleteBtn";
import Banner from "../components/Banner";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, TextArea, SubmitBtn } from "../components/Form";
// import PlusButton from '../components/PlusButton';
import Typography from '@material-ui/core/Typography';
// import IngredientInput from "../components/IngredientInput";
// import InputForm from '../components/Input';
import TextField from '@material-ui/core/TextField';
import TacoForm from "../components/TacoForm";
import IngredientInput from "../components/IngredientInput";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Tacos extends Component {
  state = {
    tacos: [],
    taco_id: "",
    user_id: "",
    taco_type: "",
    review: "",
    restaurant: "",
    rating: "",
    // tacoPhoto: "",
    lat: "",
    lng: ""
  };

  componentDidMount() {
    this.loadTacos();
  };

  loadTacos = () => {
    API.getTacos()
      .then(res => this.setState({
        tacos: res.data,
        taco_id: "",
        user_id: "",

        taco_type: "",
        rating: "",
        review: "",
        restaurant: "",

        // tacoPhoto: "",
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
    event.preventDefault();
    if (this.state.taco_id && this.state.user_id && this.state.taco_type && this.state.restaurant && this.state.review && this.state.rating && this.state.lat && this.state.lng) {
      API.saveTaco({
        taco_id: this.state.taco_id,
        user_id: this.state.user_id,

        taco_type: this.state.taco_type,
        restaurant: this.state.restaurant,
        review: this.state.review,

        rating: this.state.rating,
        // tacoPhoto: this.state.tacoPhoto,
        lat: this.state.lat,
        lng: this.state.lng
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
              <Banner><h1>Hot Taco</h1></Banner>
              <form className="form-container">
                <Typography variant="h6" gutterBottom>
                  Enter Your Tacos
                </Typography>
                {/* <IngredientInput /> */}

                <Grid item xs={12} md={6}>
                  <TextField
                    required id="taco_id"
                    name="taco_id"
                    label="Id of Taco"
                    value={this.state.taco_id}
                    onChange={this.handleInputChange}
                    fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required id="taco_type"
                    name="taco_type"
                    label="Type of Taco"
                    value={this.state.taco_type}
                    onChange={this.handleInputChange}
                    fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required id="user_id"
                    name="user_id"
                    label="User Id"
                    value={this.state.user_id}
                    onChange={this.handleInputChange}
                    fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    name="rating"
                    required id="rating"
                    label="Rating"
                    value={this.state.rating}
                    onChange={this.handleInputChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    name="restaurant"
                    required id="restaurant"
                    label="Restaurant"
                    value={this.state.restaurant}
                    onChange={this.handleInputChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextArea
                    value={this.state.review}
                    onChange={this.handleInputChange}
                    name="review"
                    placeholder="Review(required)"
                  /></Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    name="lat"
                    required id="lat"
                    label="Latitude"
                    value={this.state.lat}
                    onChange={this.handleInputChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    name="lng"
                    required id="lng"
                    label="Longitude"
                    value={this.state.lng}
                    onChange={this.handleInputChange}
                    fullWidth
                  />
                </Grid>
                <SubmitBtn
                  disabled={!(this.state.taco_id && this.state.user_id && this.state.taco_type && this.state.user_id && this.state.lng)}
                  onClick={this.handleFormSubmit}
                >
                </SubmitBtn>
                {/* </Grid>  */}
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper>
              <Banner><h1>The Tacos</h1></Banner>
              <Grid container spacing={24}>
                {this.state.tacos.length ? (<div>
                  <List>
                    {this.state.tacos.map(taco => (
                      <ListItem key={taco._id}>
                        <Link to={"/tacos/" + taco._id}>
                          <strong>
                            {taco.taco_type} by {taco.user_id}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() =>
                          this.deleteTaco(taco._id)
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
      </div >
    );
  }
};


export default Tacos;