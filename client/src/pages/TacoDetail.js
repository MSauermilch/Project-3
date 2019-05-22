import React, { Component } from 'react';
import API from '../utils/API';
import Card from '../components/Card';

class TacoDetail extends Component {
  state = {
    taco: {}
  };

  componentDidMount() {
    API.getTaco(this.props.match.params.id)
      .then(res => this.setState({
        taco: res.data
      }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.taco.taco_type}
        </h1>
        <h3>
          {this.state.taco.user_id}
        </h3>
        <div>
          <h4>
            {this.state.taco.taco_type}
          </h4>
          <Card>
            <ul>
              <li>
                {this.state.taco.user_id}
              </li>
              <li>
                {this.state.taco.restaurant}
              </li>
              <li>
                {this.state.taco.rating}
              </li>
              <li>
                {this.state.taco.review}
              </li>
            </ul></Card>
        </div>
      </div>
    );
  }
}

export default TacoDetail;


