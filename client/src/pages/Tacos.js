import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, SubmitBtn } from "../components/Form";
import { List, ListItem } from 'react';
// import IngredientInput from "../components/IngredientInput";

class Tacos extends Component {
  state = {
    tacos: [],
    taco_id: "",
    user_id: "",
    taco_type: "",
    review: "",
    restaurant: "",
    rating: "",
    tacoPhoto: "",
    // location: "",
    // date: ""
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
        review: "",
        restaurant: "",
        rating: "",
        tacoPhoto: "",
        // location: "",
        // date: ""
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
    if (this.state.taco_id && this.state.user_id && this.state.restaurant && this.state.rating) {
      API.saveTaco({
        taco_id: this.state.taco_id,
        user_id: this.state.user_id,
        tacoType: this.state.taco_type,
        review: this.state.review,
        restaurant: this.state.restaurant,
        rating: this.state.rating,
        tacoPhoto: this.state.tacoPhoto,
        // location: this.state.location,
      })
        .then(res => this.loadTacos())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div>

        <div>
          <h1>Hot Tacos</h1>

          <form>
            <Input
              value={this.state.taco_id}
              onChange={this.handleInputChange}
              name="taco_id"
              placeholder="taco id"
            />
            <Input
              value={this.state.user_id}
              onChange={this.handleInputChange}
              name="user_id"
              placeholder="user id"
            />
            <Input
              value={this.state.taco_type}
              onChange={this.handleInputChange}
              name="taco_type"
              placeholder="taco description"
            />
            <TextArea
              value={this.state.review}
              onChange={this.handleInputChange}
              name="review"
              placeholder="review"
            />
            <Input
              value={this.state.restaurant}
              onChange={this.handleInputChange}
              name="restaurant"
              placeholder="restaurant"
            />
            <Input
              value={this.state.rating}
              onChange={this.handleInputChange}
              name="rating"
              placeholder="rating"
            />
            {/* <upload photo /> */}
            {/* location */}


            <SubmitBtn
              disabled={!(
                this.state.taco_id && this.state.user_id && this.state.restaurant && this.state.rating)}
              onClick={this.handleFormSubmit}
            >
            </SubmitBtn>
          </form>
        </div>

        <div>
          <h1>list</h1>
          {this.state.tacos.length ? (
            <List>
              {this.state.tacos.map(taco => (
                <ListItem key={taco.taco_id}>
                  <Link to={"/tacos/" + taco.taco_id}>
                    <strong>
                      {taco.tacoType} by {taco.taco_id}
                    </strong>
                  </Link>
                  <button onClick={() =>
                    this.deleteTaco(taco.taco_id)
                  } >x</button>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No results to be displayed</h3>
            )}
        </div>
      </div>

    )
  }
};


export default Tacos;