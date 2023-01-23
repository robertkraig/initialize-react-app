import React from 'react';
import './App.css';
import {YouClickedMeContainer} from "./components/YouClickedMeContainer";
import {Link, Outlet} from "react-router-dom";
import {RouteNames} from "./router";
import {NavMenu, NavMenuItem, NavMenuItems} from "./components/styles";

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        {'Sample Initialized React App'}
      </header>
        <NavMenu>
            <NavMenuItems>
                <NavMenuItem><Link to={RouteNames.YouClickedMeNew}>New Hook Style</Link></NavMenuItem>
                <NavMenuItem><Link to={RouteNames.YouClickedMeOld}>Old Component Style</Link></NavMenuItem>
                <NavMenuItem><Link to={RouteNames.YouClickedMeContainer}>Pure Component Style</Link></NavMenuItem>
                <NavMenuItem><Link to={RouteNames.YouClickedMeContext}>Context Oriented Style</Link></NavMenuItem>
            </NavMenuItems>
        </NavMenu>
        <main>
            <Outlet />
        </main>
    </div>
  );
}

export default Layout;
