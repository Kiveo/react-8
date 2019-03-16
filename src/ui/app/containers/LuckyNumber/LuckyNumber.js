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

//adding import for child luckynumberdisplay
import LuckyNumberDisplay from '../../components/LuckyNumberDisplay/LuckyNumberDisplay';

class LuckyNumber extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay {...this.props} />
        {/* testing functionality display inside LuckyNumberDisplay child component */}
      </article>
    );
  }
}

// const mapStateToProps = (state) => ({
//   // TODO: Get values from Redux store
//   luckyNumber: state.luckyNumber,
//   message: state.message
// });

const mapStateToProps = (state) => {
  return {message: state.message}
}

export default connect()(LuckyNumber);
