import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/admin';
import { AccountDetails, AccountProfile } from './components';

class Account extends Component {


  componentDidMount() {
    const { adminActionCreators } = this.props;
    const { fetchAdmin } = adminActionCreators;
    fetchAdmin();
  }
  showAdminDetail() {
    const { admin } = this.props;
    let xhtml = null;
    if (admin !== null) {
      xhtml = (
        <div>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              lg={4}
              md={6}
              xl={4}
              xs={12}
            >
              <AccountProfile admin={admin} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
              <AccountDetails admin={admin} />
            </Grid>
          </Grid>
        </div>
      );
    } 
    return xhtml;
  }

  render() {
    return this.showAdminDetail();
  }
};
Account.propTypes = {
  adminActions: PropTypes.shape({
    fetchAdmin: PropTypes.func
  }),
  admin: PropTypes.object
};
const mapStateToProps = state => {
  return {
    admin: state.admin.admin
  }
};
const mapDispatchToProps = dispatch => {
  return {
    adminActionCreators: bindActionCreators(taskActions, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
