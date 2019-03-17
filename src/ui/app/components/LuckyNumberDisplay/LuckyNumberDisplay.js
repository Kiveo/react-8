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
    // const { } = this.props;
    const { firstname, lastname, username } = props.userInfo;
    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
        <p>Hello, {`${firstname + " " + lastname}!`}</p>
        <p>Your lucky number is: </p>
        {/* <p>Luckynumber: {`${luckynumber}`}</p> */}
      </div>
    );
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {

};

export default LuckyNumberDisplay;
