import React from 'react';
import { FormattedMessage } from 'react-intl';

import Title from './Title';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Title>What Can I Play With My Friends?</Title>
      </div>
    );
  }
}

export default Header;
