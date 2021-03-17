import {baseUrl} from "../utils/constants";
import React, {Component} from 'react';
import style from "../css_modules/fargalaxy.module.css";

class OpenCrawl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({
                isLoading: false,
                opening_crawl
            })
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${baseUrl}/v1/films/${episode}`)
        .then(response => response.json())
                .then(data => {
                    this.setState({
                        isLoading: false,
                        text: data.opening_crawl,
                    });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <p className={`${style.farGalaxy} text-justify`}>{this.state.opening_crawl}</p>
                </div>
            );
        }
    }
}

export default OpenCrawl;