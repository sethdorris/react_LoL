import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainStyles from '../styles/Main.css';

class BackDrop extends Component {
  render() {
      return (
          <div className={this.props.isActive ? "active backdrop" : "backdrop"}></div>
    );
  }
}

BackDrop.propTypes = {
  isActive: PropTypes.bool
}
export default BackDrop;
