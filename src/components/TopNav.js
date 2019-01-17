import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavStyles from '../styles/Nav.css';

class TopNav extends Component {
    render() {
        return (
          <nav id="top-nav">
            <span>Welcome, {this.props.handle}</span>
          </nav>
      );
    }
}

TopNav.propTypes = {
    handle: PropTypes.string
}

export default TopNav;
