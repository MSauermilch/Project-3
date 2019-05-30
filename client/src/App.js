import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Tacos from './pages/Tacos';
import Dashboard from './pages/Dashboard.js';
import TacoDetail from './pages/TacoDetail';
import TacoForm from './components/TacoForm';
import Footer from './components/Footer';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import NoMatch from './pages/NoMatch';
// import Auth from './pages/Auth';
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Tacos} />
          <Route exact path="/api/tacos" component={Tacos} />
          <Route exact path="/api/tacos/:id" component={TacoDetail} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Footer /> */}
      </Router >
    </div>
  );
}
export default App;
