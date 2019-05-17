import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const SignInLink = props => <Link to="/signin" {...props} />
const SignUpLink = props => <Link to="/register/signup" {...props} />
const HomeLink = props => <Link to="/" {...props} />
const TacosLink = props => <Link to="/api/tacos" {...props} />

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>Hot Taco App
          </Typography>
          <Button color="inherit" component={HomeLink}>
            Home
                    </Button>
          <Button color="inherit" component={TacosLink}>
            TacosLink
                    </Button>
          <Button color="inherit" component={SignUpLink}>
            SignUpLink
                    </Button>
          <Button color="inherit" component={SignInLink}>
            SignInLink
                    </Button>
        </Toolbar>
      </AppBar>
    </div >
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
