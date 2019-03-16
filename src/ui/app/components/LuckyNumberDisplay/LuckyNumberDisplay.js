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
    const { username } = props;
    console.log("Log from LUCKY component: " + props.luckyNumber);

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
        <p>HELLO WORLD!! TESTING FUNCTIONALITY</p>
        <p>Props: {`${props}`}</p>
      </div>
    );
}

// TODO: Add PropTypes
// LuckyNumberDisplay.propTypes = {

// };

export default LuckyNumberDisplay;
