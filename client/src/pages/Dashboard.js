import React, { Component } from 'react';
import TacoForm from '../components/TacoForm';
import Map from '../components/GoogleMap';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      // message: 'Loading...'
    }
  }

  // componentDidMount() {
  //   fetch('/api/dashboard')
  //     .then(res => res.text())
  //     .then(res => this.setState({ message: res }));
  // }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <Map />
        <TacoForm />
      </div>
    );
  }
}