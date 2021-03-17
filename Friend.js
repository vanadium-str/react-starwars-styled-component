import React from 'react';
import style from "../css_modules/friend.module.css";
import {Link} from "react-router-dom";
import {characters, homePage} from "../utils/constants";
import styled from "styled-components";

const ImgFriend = styled.img`
  border-bottom-left-radius: ${({number}) => number === 7 ? '1rem': 'auto'};
  border-bottom-right-radius: ${({number}) => number === 9 ? '1rem': 'auto'};
`

const Friend = ({hero, number}) => {
    return (
        <Link className='col-4' to={`/${homePage}/${hero}`}>
        <ImgFriend number={number} className='w-100 p-1' src={characters[hero].img} alt={characters[hero].name}/>
        </Link>
        );
};

export default Friend;