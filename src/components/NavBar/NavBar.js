import React from 'react'
import {Link} from "react-router-dom";

export default function NavBar(props) {
    const current = <span className="sr-only">(current)</span>;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/index" className="navbar-brand" >
                Devin Gillogly
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <nav className="navbar-nav ml-auto text-right">
                    <Link to="/contact.html" className={props.currentPage === "contact" ? "nav-item nav-link active" :  "nav-item nav-link"}>
                        Contact {props.currentPage === "contact" ? current : ""}
                    </Link>
                    <Link to="/portfolio.html" className={props.currentPage === "portfolio" ? "nav-item nav-link active" :  "nav-item nav-link"}>
                        Portfolio {props.currentPage === "portfolio" ? current : ""}
                    </Link>
                    <Link to="/About" className={props.currentPage === "about" ? "nav-item nav-link active" :  "nav-item nav-link"}>
                        About {props.currentPage === "about" ? current : ""}
                    </Link>
                </nav>
            </nav>
        </nav>
    );
}