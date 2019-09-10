import { Button, Grid, IconButton, Link, Typography, withStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from './../../components/PormHelper/TextField';
import styles from './styles';
import validate from './../../common/validate';
import * as loginActions from './../../actions/login';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  handleSubmitForm = data => {
    console.log(data);
    const { loginActionCreators } = this.props;
    const { login } = loginActionCreators;
    const { Email, Eassword } = data;
    login(Email, Eassword);
  }

  required = value => {
    let error = 'Field must required';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      error = null;
    }
    return error;
  }

  goBack() {
    this.props.history.goBack();
  }

  
  render() {
    const { handleSubmit, classes, invalid, submitting } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.quoteContainer}
            item
            lg={5}
          >
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
              </Typography>
                <div className={classes.person}>
                  <Typography
                    className={classes.name}
                    variant="body1"
                  >
                    Hai Lua
                </Typography>
                  <Typography
                    className={classes.bio}
                    variant="body2"
                  >
                    Manager at HaiLuaStudio
                </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton >
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(this.handleSubmitForm)}
                >
                  <Typography
                    className={classes.title}
                    variant="h2"
                  >
                    Sign in
                </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                  >
                    Sign in with social media
                </Typography>
                  <Grid
                    className={classes.socialButtons}
                    container
                    spacing={2}
                  >
                    <Grid item>
                      <Button
                        color="primary"
                        size="large"
                        variant="contained"
                      >
                        <FacebookIcon className={classes.socialIcon} />
                        Login with Facebook
                    </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        size="large"
                        variant="contained"
                      >
                        <GoogleIcon className={classes.socialIcon} />
                        Login with Google
                    </Button>
                    </Grid>
                  </Grid>
                  <Typography
                    align="center"
                    className={classes.sugestion}
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                </Typography>
                  <Field
                    className={classes.textField}
                    fullWidth
                    id="email"
                    label="Email address"
                    name="Email"
                    component={renderTextField}
                    type="text"
                    variant="outlined"
                  />
                  <Field
                    className={classes.textField}
                    fullWidth
                    id="password"
                    label="Password"
                    name="Password"
                    type="password"
                    variant="outlined"
                    component={renderTextField}
                  />
                  <Button
                    className={classes.signInButton}
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={invalid || submitting}
                  >
                    Sign in now
                </Button>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    Don't have an account?{' '}
                    <Link
                      component={RouterLink}
                      to="/sign-up"
                      variant="h6"
                    >
                      Sign up
                  </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

};

SignIn.propTypes = {
  classes: PropTypes.object,
  loginActionCreators: PropTypes.shape({
    login: PropTypes.func
  })
};

const withReduxForm = reduxForm({
  // a unique name for the form
  form: 'signin',
  validate
})
const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  loginActionCreators: bindActionCreators(loginActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect, withReduxForm)(SignIn);
