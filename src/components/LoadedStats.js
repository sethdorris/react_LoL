import React, { Component } from 'react';
import Matches from './matches';
import PropTypes from 'prop-types';


class LoadedStats extends Component {

    render() {
        return (
            <div className="stats-container">
              <h3>BruiseR's Stats</h3>
              <Matches matches={this.props.matches}></Matches>
            </div>
      );
            }
}

LoadedStats.propTypes = {
    matches: PropTypes.array
}

export default LoadedStats;
