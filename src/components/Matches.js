import React from 'react';
import MatchResult from './MatchResult';
import PropTypes from 'prop-types';
 
const Matches = ({ matches }) => (
    <div className="container">
        <h3>Match History</h3>
        {matches.map((m, index) => <MatchResult key={index} match={m} />)}
    </div>
)
 
Matches.propTypes = {
    matches: PropTypes.array
}
 
export default Matches;