import React, {useContext} from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {Link} from "react-router-dom";
import {NaviContext} from "../utils/context";

const Navigation = () => {
    const {hero} = useContext(NaviContext);
    return (
        <nav className="fixed-top ml-4 mt-2">
            <Link className="nav-item btn btn-danger mx-1 border border-white" to={`/${homePage}/${hero}`}>Home</Link>
            <Link className="nav-item mx-1 btn btn-danger border border-white" to={`/${aboutMePage}/${hero}`}>About
                Me</Link>
            <Link className="nav-item mx-1 btn btn-danger border border-white" to={`/${starWarsPage}`}>Star Wars</Link>
            <Link className="nav-item btn btn-danger mx-1 border border-white" to={`/${contactPage}`}>Contact</Link>
        </nav>

    );
};

export default Navigation;