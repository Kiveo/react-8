/**
 * Welcome.js
 *
 * This container is the component initially displayed when the
 * application is loaded. It is used to collect user data, make
 * a service call, and then show the LuckyNumber container.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import WelcomeForm from 'components/WelcomeForm/WelcomeForm';

import { CONTAINER_KEY } from '../constants';
import saga from '../saga';
import reducer from '../reducer';

class Welcome extends React.PureComponent {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  /**
   * This function is invoked when the Redux Form is submitted.
   *
   * @see https://redux-form.com/7.4.2/docs/gettingstarted.md/#step-4-of-4-reacting-to-submit
   * @param {*} values An immutable map of the Redux Form values
   */
  submit(event, values) {
    //why is the page refreshing? when I preventdefault via passing event, values are nixxed. why?
    //I must presume my non-familiarity with redux-saga is causing me a lot of headaches in this app.
    const { dispatch } = this.props;

    // TODO: Get the form values and invoke the service layer 
    //what does "invoke the service layer" even mean? understood as dispatch/fetch api 
    //dispatch intially ???, changed to send an action 
    // dispatch({type: GET_SAMPLE_MESSAGE, payload: "new message"});
    event.preventDefault();
    this.props.history.push('/lucky');
  }



  render() {
    return (
      <article>
        <Helmet>
          <title>Welcome</title>
        </Helmet>

        <div className="mt5 pa4 center w-25 bg-light-gray">
          {/* adding handleSubmit to form functionality  */}
          <WelcomeForm handleSubmit={this.submit} />
        </div>
      </article>
    );
  }
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired
};

// These are some handy functions provided by the boilerplate project
// They take care of injecting the Saga and reducer
const withConnect = connect();
const withSaga = injectSaga({ key: CONTAINER_KEY, saga });
const withReducer = injectReducer({ key: CONTAINER_KEY, reducer });

export default compose(withReducer, withSaga, withConnect)(Welcome);
