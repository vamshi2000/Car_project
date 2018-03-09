import React, { Component } from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

class Header extends Component {
    render() {
      return (
        <header id="header">
        <HeaderTop />
        <HeaderBottom />
        </header>
    );
}
}

export default Header;