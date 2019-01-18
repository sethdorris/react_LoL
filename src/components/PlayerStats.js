import React, { Component } from 'react';
import LoadedStats from './LoadedStats';
import axios from 'axios';

class PlayerStats extends Component {
    state = {
        data: {},
        isLoaded: false
    }

    async componentDidMount() {
        const statsResponse = await axios.get("/GetStats");
        console.log(statsResponse.data);
        this.setState(prev => ({ isLoaded: true, data: statsResponse.data }))
    }


    render() {
        let isLoaded = this.state.isLoaded;
        let matchData = this.state.data.matchDetails;

        return (
            isLoaded ? ( <LoadedStats matches={matchData}/> ) 
                     : (
                        <div className="stats-container">
                          <h6>... fetching your data! </h6> 
                        </div>
                     )
        );
            }

}

export default PlayerStats;
