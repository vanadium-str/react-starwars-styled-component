import React, {useState, useEffect} from 'react';
import "../css_modules/contacts.module.css";
import {baseUrl, periodMonth} from "../utils/constants";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    async function fillPlanets(url) {
        try {
            const response = await fetch(url);
            const json = await response.json();
            const planets = json.map(item => item.name);
            setPlanets(planets);
            let info = {
                listPlanets: planets,
                time: Date.now()
            };
            localStorage.setItem('planets', JSON.stringify(info));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        let planets = JSON.parse(localStorage.getItem('planets'));
        if (!planets || (Date.now() - planets.time) > periodMonth) {
            fillPlanets(`${baseUrl}/v1/planets`);
        } else {
            setPlanets(planets.listPlanets);
        }
    }, []);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">{
                    planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                }
                </select>
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}


export default Contact;