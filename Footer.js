import React from 'react';
import style from "../css_modules/footer.module.css";

const Footer = () => {
    return (
        <footer className="row no-gutters align-items-center">
            <div className="col-2 offset-2 btn btn-danger border border-white">
                Send me an <span className={`${style.bold} small text-uppercase`}>email</span>
            </div>
        </footer>
    );
};

export default Footer;