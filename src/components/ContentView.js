import React, { Component } from 'react';
import PlayerStats from './PlayerStats';

class ContentView extends Component {

    render() {
        return (
        <div className="content-container">
          <h1>Some Data Brah</h1>
          <PlayerStats></PlayerStats>
        </div>
        );
    }

    }

export default ContentView;
