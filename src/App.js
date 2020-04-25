import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';


export default function Router() {
  return (
    <BrowserRouter>
        <div>
            {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
            */}
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/portfolio">
                    <PortfolioPage />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}