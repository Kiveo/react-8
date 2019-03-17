/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
//currently unused, will add when implemented
// import { CONTAINER_KEY } from '../constants';    
//adding import for child luckynumberdisplay
import LuckyNumberDisplay from '../../components/LuckyNumberDisplay/LuckyNumberDisplay';

class LuckyNumber extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>
        {/* passing props to child for display */}
        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  //TODO: Get values from Redux store
  return {
       userInfo: state.get("challenger").userInfo,
       luckyNumber: state.get("challenger").luckyNumber
  };
}

export default connect(mapStateToProps)(LuckyNumber);
