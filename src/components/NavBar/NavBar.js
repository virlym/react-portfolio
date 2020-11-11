import React from 'react'
import {Link, useLocation} from "react-router-dom";

export default function NavBar() {
    const current = <span className="sr-only">(current)</span>;
    const location = useLocation();
    let currentPage = "";
    console.log(location.pathname);
    if(location.pathname === "/contact"){
        currentPage = "contact";
    }
    else if(location.pathname === "/portfolio"){
        currentPage = "portfolio";
    }
    else{
        currentPage = "about";
    }
    console.log(currentPage);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to="/index" className="navbar-brand" >
                Devin Gillogly
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <nav className="navbar-nav ml-auto text-right">
                    <Link to="/contact" className={currentPage === "contact" ? "nav-item nav-link active" :  "nav-item nav-link"}>
                        Contact {currentPage === "contact" ? current : ""}
                    </Link>
                    <Link to="/portfolio" className={currentPage === "portfolio" ? "nav-item nav-link active" :  "nav-item nav-link"}>
                        Portfolio {currentPage === "portfolio" ? current : ""}
                    </Link>
                    <Link to="/about" className={currentPage === "about" ? "nav-item nav-link active" :  "nav-item nav-link"}>
                        About {currentPage === "about" ? current : ""}
                    </Link>
                </nav>
            </nav>
        </nav>
    );
}