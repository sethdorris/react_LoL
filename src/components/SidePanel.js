import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SidePanel extends Component {

    render() {
        return (
          <SideNav>
            <SideNav.Toggle onClick={this.props.menuClick}/>
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon className="flex p-l">
                        <i className="fa fa-fw fa-home jc" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Summoner's Stats
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
      );
    }
}

SidePanel.propTypes = {
    handle: PropTypes.string,
    menuClick: PropTypes.func.isRequired
}

export default SidePanel;
