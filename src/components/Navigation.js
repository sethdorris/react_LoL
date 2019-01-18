import React, { Component } from 'react';
import TopNav from './TopNav';
import SidePanel from './SidePanel';
import BackDrop from './BackDrop';
import ContentView from './ContentView';
import NavStyles from '../styles/Nav.css';
import MainStyles from '../styles/Main.css';

class Navigation extends Component {
    state = {
        handle: "Summoner",
        showPanel: false
    }

    menuClick = e => {
      this.setState(prev => ({ showPanel: !prev.showPanel }))
    }

    render() {
        return (
        <div className="container">
          <TopNav handle={this.state.handle}></TopNav>
          <SidePanel menuClick={this.menuClick}></SidePanel>
          <BackDrop isActive={this.state.showPanel}></BackDrop>
          <ContentView></ContentView>
        </div>
      );
    }

}

export default Navigation;
