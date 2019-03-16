/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { CONTAINER_KEY } from '../constants';

class LuckyNumber extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        {/* <LuckyNumberDisplay {...this.props} /> */}
        {/* testing functionality display below in <p> */}
        {/* <p>HELLO WORLD, from LuckyNumber class component</p> */}
      </article>
    );
  }
}

const mapStateToProps = (state) => ({
  // TODO: Get values from Redux store
  luckyNumber: state.luckyNumber,
  message: state.message
});

export default connect()(LuckyNumber);
