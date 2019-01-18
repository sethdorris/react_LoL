import React, { Component } from 'react';

class MatchResult extends Component {

    render() {
        return (
        <div className="match-container">
          <h3>This is a match.</h3>
          <p>Game Id: {this.props.match.gameId}</p>
          <p>Teams: {this.props.match.teams[0].teamId} vs. {this.props.match.teams[1].teamId} </p>
          <p>Result: {this.props.match.teams[0].win} - {this.props.match.teams[1].win} </p>
        </div>
        );
    }

}

export default MatchResult;
