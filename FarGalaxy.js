import React, {useState, useEffect} from 'react';
import style from "../css_modules/fargalaxy.module.css";
import {baseUrl} from "../utils/constants";
import FarGalaxyText from "../styled_components/FarGalaxyText";

const FarGalaxy = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [opening_crawl, setOpening_crawl] = useState();

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setIsLoading(false);
            setOpening_crawl(opening_crawl);
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${baseUrl}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setIsLoading(false)
                    setOpening_crawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
        return () => console.log('Component FarGalaxy unmounted');
    }, []);

    const text = isLoading ? 'Loading...' : opening_crawl;
    return (
        <p className={`${style.farGalaxy} text-justify`}>{text}</p>
    );

}

export default FarGalaxy;