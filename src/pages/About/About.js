import React from "react";

function About() {
  return (
    <main className="container content-wrap">
    <section className="row  border-bottom">
      <article className="col-lg-12">
        <h1> About Me </h1>
      </article>
    </section>
    <section className="row">
      <article className="col-lg-12">
        <img src={process.env.PUBLIC_URL + '/img/hood.jpg'} className="rounded float-left about-img" alt="placeholder"/>
        <p>Devin Gillogly is a quick learner who has an interest in dabbling in anything new when presented an
          opportunity. In high school, he took part in the FIRST Robotics Team (Chop Shop 166) in multiple fields. He
          was part of the SolidWorks/Wildfire design team, the C++ programming team, the part fabrication team, as well
          as being the lead for the Configuration Management team. This lead him to pursue a degree in Computer
          Engineering Technology after graduation. In college, he increased his familiarity with more programming
          languages such as Java. The Java experience lead to a job with Deloitte. However, their staff needed more
          people working in the Oracle teams, so Devin picked up some SQL and started working in the Oracle department
          until the project intake slowed. There was need for Liferay Developers for a few incoming projects, so Devin
          learned Liferay to help out on those projects as well.</p>
      </article>
    </section>
    <section className="row">
      <article className="col-lg-12">
        <p>Due to some unforeseen complications, Devin hasn't been able to do much work in his field of
          study for a time. An opportunity to attend a coding Boot Camp presented itself which had a
          focus on front-end programming. While his previous experience was mostly back-end and embedded work,
          the Boot Camp could provide a new learning area, as well as add to the back-end knowledge.
        </p>
        <p> <a href="https://github.com/virlym" rel="noopener noreferrer" target="_blank">GitHub</a> <br /> 
          <a href="https://www.linkedin.com/in/virlym/" rel="noopener noreferrer" target="_blank">LinkedIn</a> <br />
          <a href = {process.env.REACT_APP_RESUME_LINK} rel="noopener noreferrer" target = "_blank"> Resume </a> <br />
          <a href = "mailto:virlym@gmail.com" rel="noopener noreferrer" target = "_blank"> Email : Virlym@gmail.com </a>
        </p>
      </article>
    </section>
  </main>
  );
}

export default About;