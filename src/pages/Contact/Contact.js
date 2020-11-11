import React from "react";

function Contact() {
  return (
    <main class="container content-wrap">
    <section class="row  border-bottom">
      <div class="col-lg-12">
        <h1> Contact </h1>
      </div>
    </section>
    <section class="row">
      <article class="col-lg-12">
        <form>
          <section class="form-group">
            <label for="exampleInputName1">Name</label>
            <input type="Name" class="form-control" id="exampleInputName1" placeholder="Name" />
          </section>
          <section class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Email" />
          </section>
          <section class="form-group">
            <label for="exampleMessage1">Message</label>
            <textarea class="form-control" id="exampleMessage1" rows="3" placeholder="Message"></textarea>
          </section>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </article>
    </section>
  </main>
  );
}

export default Contact;