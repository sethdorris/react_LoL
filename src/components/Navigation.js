import React, { Component } from 'react';
import TopNav from './TopNav';
import SidePanel from './SidePanel';
import BackDrop from './BackDrop';
import NavStyles from '../styles/Nav.css';
import MainStyles from '../styles/Main.css';

class Navigation extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            handle: "Summoner",
            showPanel: false
        }
    }

    menuClick = e => {
        console.log("Clicked")
    }

    render() {
        return (
        <div className="container">
          <button className="fa fa-bars" onClick={this.menuClick}></button>
          <TopNav handle={this.state.handle}></TopNav>
          <SidePanel></SidePanel>
          <BackDrop></BackDrop>
        </div>
      );
    }

}

export default Navigation;
