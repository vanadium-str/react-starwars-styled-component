import React from 'react';
import {starsWarsInfo} from "../utils/constants";
import FarGalaxyText from "../styled_components/FarGalaxyText";
import styled from "styled-components";

const StarWarsInfo = styled.p``;

const StarWars = () => {
    return (
       <FarGalaxyText>
           <StarWarsInfo>{starsWarsInfo}</StarWarsInfo>
       </FarGalaxyText>
    );
};

export default StarWars;