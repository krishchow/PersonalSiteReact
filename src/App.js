import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import FirstBlog from './pages/blog/FirstBlog';
import SecondBlog from './pages/blog/SecondBlog';
import ThirdBlog from './pages/blog/ThirdBlog';
import FourthBlog from './pages/blog/FourthBlog';
import FifthBlog from './pages/blog/FifthBlog';


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
                <Route path="/blog">
                    <Blogs />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

function Blogs() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path } = useRouteMatch();
    console.log(path);
    return (
        <Switch>
            <Route exact path={path}>
                <FifthBlog/>
            </Route>
            <Route path={`${path}/first`}>
                <FirstBlog/>
            </Route>
            <Route path={`${path}/second`}>
                <SecondBlog/>
            </Route>
            <Route path={`${path}/third`}>
                <ThirdBlog/>
            </Route>
            <Route path={`${path}/fourth`}>
                <FourthBlog/>
            </Route>
            <Route path={`${path}/fifth`}>
                <FifthBlog/>
            </Route>
        </Switch>
    );
}