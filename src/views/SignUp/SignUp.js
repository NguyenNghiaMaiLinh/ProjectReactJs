import { Button, Grid, IconButton, Link, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderCheckbox from './../../components/CheckBoxHelper/CheckBox';
import renderTextField from './../../components/PormHelper/TextField';
import styles from './styles.js';
import validate from './../../common/validate';
import asyncValidate from './../../common/asyncValidate';

class SignUp extends React.Component {

  handleSubmitForm = data => {
    console.log(data);
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
                <IconButton>
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
                    Create new account
                </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                  >
                    Use your email to create new account
                </Typography>
                  <Field
                    className={classes.textField}
                    fullWidth

                    label="First name"
                    name="FirstName"

                    type="text"
                    variant="outlined"
                    component={renderTextField}
                  />
                  <Field
                    className={classes.textField}
                    fullWidth
                    label="Last name"
                    name="LastName"
                    type="text"
                    variant="outlined"
                    component={renderTextField}
                  /><Field
                    className={classes.textField}
                    fullWidth
                    label="UserName"
                    name="UserName"
                    type="text"
                    variant="outlined"
                    component={renderTextField}
                  /><Field
                    className={classes.textField}
                    fullWidth
                    label="State"
                    name="State"
                    type="text"
                    variant="outlined"
                    component={renderTextField}
                  />
                  <Field
                    className={classes.textField}
                    fullWidth
                    label="Country"
                    name="Country"
                    type="text"
                    variant="outlined"
                    component={renderTextField}
                  /> <Field
                    className={classes.textField}
                    fullWidth
                    label="PhoneNumber"
                    name="PhoneNumber"
                    type="text"
                    variant="outlined"
                    component={renderTextField}
                  />
                  <Field
                    className={classes.textField}
                    fullWidth
                    label="Email address"
                    name="Email"
                    type="text"
                    variant="outlined"
                    component={renderTextField}
                  />
                  <Field
                    className={classes.textField}
                    fullWidth
                    label="Password"
                    name="Password"
                    type="password"
                    variant="outlined"
                    component={renderTextField}
                  />
                  <div className={classes.policy}>
                    <Field
                      className={classes.policyCheckbox}
                      color="primary"
                      name="policy"
                      component={renderCheckbox}
                    />
                    <Typography
                      className={classes.policyText}
                      color="textSecondary"
                      variant="body1"
                    >
                      I have read the{' '}
                      <Link
                        color="primary"
                        component={RouterLink}
                        to="#"
                        underline="always"
                        variant="h6"
                      >
                        Terms and Conditions
                    </Link>
                    </Typography>
                  </div>
                  <Button
                    className={classes.signUpButton}
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={invalid || submitting}
                  >
                    Sign up now
                </Button>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    Have an account?{' '}
                    <Link
                      component={RouterLink}
                      to="/sign-in"
                      variant="h6"
                    >
                      Sign in
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

SignUp.propTypes = {
  history: PropTypes.object
};

const withReduxForm = reduxForm({
  form: 'SignUp',
  validate,
  asyncValidate
});

export default compose(withReduxForm, withStyles(styles))(SignUp);
