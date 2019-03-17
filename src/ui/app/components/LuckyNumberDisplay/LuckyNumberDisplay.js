/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

//converted class to functional component, display only
const LuckyNumberDisplay = (props) => {
    // TODO: Receive props passed down from LuckyNumber container
    // destructuring
    const { firstname, lastname, username } = props.userInfo;
    const { luckyNumber } = props;

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
        <p>Hello, {`${firstname + " " + lastname}!`}</p>
        <p>Your lucky number is: </p>
        <p>{`${luckyNumber}`}</p>
      </div>
    );
}

// TODO: Add PropTypes
// decided to specify shape instead of 'object', seems more secure
LuckyNumberDisplay.propTypes = {
  userInfo : PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }),
  luckyNumber : PropTypes.number
};

export default LuckyNumberDisplay;
