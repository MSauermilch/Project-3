import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Tacos from './pages/Tacos';
import TacoDetail from './pages/TacoDetail';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import NoMatch from './pages/NoMatch';
import Auth from './pages/Auth';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/tacos" component={Tacos} />
          <Route exact path="/tacos/:id" component={TacoDetail} />
          <Route exact path="/Auth" component={Auth} />
          {/* <Route exact path="/signin" component={SignIn} /> */}
          {/* <Route exact path="/register/signup" component={SignUp} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
