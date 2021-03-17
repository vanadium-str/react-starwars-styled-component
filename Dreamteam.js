import React from 'react';
import Friend from "./Friend";
import {keys} from "../utils/constants";

const DreamTeam = ({hero}) => {
    const friends = keys.filter(k => k !== hero);
    return (
        <section className="float-right row w-50 border no-gutters mt-1 mb-0 mr-1 ml-3">
            <h2 className="col-12 text-center">Dream team</h2>
            {friends.map((item, index) => <Friend hero={item} key={index} number={index+1}/>)}
        </section>
    );
};

export default DreamTeam;