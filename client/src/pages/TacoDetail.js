// import React, { Component } from 'react';
// import API from '../utils/API';
// import Card from '../components/Card';
// import { Link } from "react-router-dom";

// class TacoDetail extends Component {
//   state = {
//     taco: {}
//   };

//   componentDidMount() {
//     API.getTaco(this.props.match.params.id)
//       .then(res => this.setState({
//         taco: res.data
//       }))
//       .catch(err => console.log(err));
//   }
//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.taco.taco_type}
//         </h1>
//         <h3>
//           {this.state.taco.user_id}
//         </h3>
//         <div>
//           <h4>
//             {this.state.taco.taco_type}
//           </h4>
//           <Card>
//             <ul>
//               <li>
//                 {this.state.taco.user_id}
//               </li>
//               <li>
//                 {this.state.taco.restaurant}
//               </li>
//               <li>
//                 {this.state.taco.rating}
//               </li>
//               <li>
//                 {this.state.taco.review}
//               </li>
//             </ul></Card>
//         </div>
//         <Link to="/">← Back to Creators</Link>
//       </div>
//     );
//   }
// }

// export default TacoDetail;


// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Banner from "../components/Banner";
// import API from "../utils/API";
// import Card from "../components/Card";
// import SimpleCard from "../components/Card";
// import Typography from '@material-ui/core/Typography';

// class Detail extends Component {
//   state = {
//     taco: {}
//   };

//   componentDidMount() {
//     API.getTaco(this.props.match.params.id)
//       .then(res => this.setState({ taco: res.data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (<div>
//       <Grid item xs={12} sm={12} md={6} lg={6}>
//         <Paper><Card>
//           {/* <Banner>
//             <h1>
//                       taco_id: "",
//         user_id: "",
//         taco_type: "",
//         review: "",
//         restaurant: "",
//         rating: "",
//         tacoPhoto: "",
//         // location: "",
//         lat: "",
//         lng: ""{this.state.taco.cocktailName}
//             </h1>
//           </Banner> */}
//           <Typography variant="h3" gutterBottom>
//             {this.state.taco.user_id}
//           </Typography>
//           <hr></hr>

//           <Typography variant="h5" gutterBottom>
//             Restaurant:  {this.state.taco.taco_type}
//           </Typography>

//           <hr></hr>
//           <Typography variant="h5" gutterBottom>
//             Review:  {this.state.taco.review}
//           </Typography>

//           <Typography variant="h5" gutterBottom>
//             Restaurant:  {this.state.taco.restaurant}
//           </Typography>

//           <Typography variant="h5" gutterBottom>
//             Rating:  {this.state.taco.rating}
//           </Typography>

//         </Card>
//           <SimpleCard></SimpleCard>
//         </Paper>
//       </Grid>
//       <Grid item xs={12} sm={12} md={6} lg={6}>
//         <Paper>
//           <Link to="/">← Back to Creators</Link>
//         </Paper>
//       </Grid>
//     </div>
//     );
//   }
// }

// export default Detail;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container }
  from "../components/Grid";
import Banner from "../components/Banner";
import API from "../utils/API";
import Card from "../components/Card";

class TacoDetail extends Component {
  state = {
    taco: {}
  };

  componentDidMount() {
    API.gettaco(this.props.match.params.id)
      .then(res => this.setState({ taco: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row><Col size="s12">
          <Banner>
            <h1>
              {this.state.taco.taco_type}
            </h1>
            <h3>
              {this.state.taco.taco_type}
            </h3>
          </Banner>

          <Card><ul>
            <li>   <h4>{this.state.taco.taco_type}</h4></li>
            <hr></hr>
            <li>Created by:  {this.state.taco.taco_type}</li>
            <li>Ingredients: {this.state.taco.taco_type}</li>
            <li>Garnish: {this.state.taco.taco_type}</li>
          </ul>
          </Card>
          <div>
            <h3>
              Ingredients
        </h3>
            <p>
              {this.state.taco.taco_type}
            </p>
          </div>
        </Col>
        </Row>
        <Row>
          <Col size="s6">
            <Link to="/">← Back to Creators</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TacoDetail;