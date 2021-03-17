import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/constants";
import {NaviContext} from "../utils/context";

const Header = () => {
    const {hero} = useContext(NaviContext);
    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-3">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;