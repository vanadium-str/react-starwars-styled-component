import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import StarWars from "./StarWars";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import ErrorPage from "./ErrorPage";
import {NaviContext} from "../utils/context";

const Main = props => {

        return (
                <Switch>
                <Route path={[`/`, `/${homePage}`,`/${homePage}/:hero`]} exact
                       render={routeProps => <Home {...routeProps}/>}/>
                <Route path={[`/${aboutMePage}/:hero`, `/${aboutMePage}`]} exact
                       render={routeProps => <AboutMe match={routeProps.match}/>}/>
                <Route path={`/${starWarsPage}`} component={StarWars}/>
                <Route path={`/${contactPage}`} component={Contact}/>
                <Route children={() => ErrorPage}/>
            </Switch>
        );
};

export default Main;