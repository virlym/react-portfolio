import React from "react";
import Projects from "./projects";
import Project from "../../components/Project/Project";

function Portfolio() {
    return (
        <main className="container content-wrap">
            <section className="row  border-bottom">
                <div className="col-lg-12">
                    <h1> Portfolio </h1>
                </div>
            </section>
            <section className="row ">
                <div className="col-lg-12">
                    <h1> <span className="reminder"> (Click the images to learn more)</span></h1>
                </div>
            </section>
            <section className="row">
                <Project data={Projects[0]}/>
                <Project data={Projects[1]}/>
            </section>
            <section class="row">
                <Project data={Projects[2]}/>
                <Project data={Projects[3]}/>
            </section>
            <section class="row">
                <Project data={Projects[4]}/>
                <article class="col-lg-6">
                </article>
            </section>
        </main>
    );
}

export default Portfolio;