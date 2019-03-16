/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

//convert class to functional???????
const LuckyNumberDisplay = (props) => {
    // TODO: Receive props passed down from LuckyNumber container
    // const { } = this.props;
    const { firstname, lastname, username } = props.userInfo;
    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
        <p>HELLO WORLD!! TESTING FUNCTIONALITY</p>
        <p>Props: {`${firstname}`}</p>
        <p>Props: {`${lastname}`}</p>
        <p>Props: {`${username}`}</p>
      </div>
    );
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {

};

export default LuckyNumberDisplay;
