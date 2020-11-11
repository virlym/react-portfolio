import React from "react";

function Portfolio() {
  return (
    <main className="container content-wrap">
    <section className="row  border-bottom">
      <div className="col-lg-12">
        <h1> Portfolio </h1>
      </div>
    </section>
    <section className="row">
      <article className="col-lg-6">
        <img src="./img/GymBroSized.png" className="figure-img img-fluid rounded folio-img" id = "gymBroPic" alt="GymBro img" data-toggle="modal" data-target="#gymModal" />
        <figcaption> GymBro (group project) </figcaption>
        <aside className="modal fade" id="gymModal" tabindex="-1" role="dialog" aria-labelledby="gymModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="gymModalLabel">GymBro</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src="./img/GymBro.png" className="img-fluid rounded" alt="GymBro modal img" />
                <p>GymBro is a browser based workout generator that allows you to pick certain criteria such as legs, arms, chest, etc, to generate a workout. Other selectors include workout intensity. In addition to providing you with a great workout we have also provided the user with the option to choose a music playlist to accompany the workout, using Spotify. Users can even save their last workout to LocalStorage and recall it as long keep their browser open!
                </p>
                <p> GitHub : <a href="https://github.com/dan-gentile/gym-bro" target="_blank" rel="noopener noreferrer">link</a>
                </p>
                <p>Deployed : <a href="https://dan-gentile.github.io/gym-bro/" target="_blank" rel="noopener noreferrer">link</a>
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </aside>
      </article>
      <article className="col-lg-6">
        <img src="./img/dashboardExampleSized.PNG" className="figure-img img-fluid rounded folio-img" id = "weatherDashPic" alt="Weather Dashboard img" data-toggle="modal" data-target="#dashModal" />
        <figcaption> Weather Dashboard </figcaption>
        <aside className="modal fade" id="dashModal" tabindex="-1" role="dialog" aria-labelledby="dashModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="dashModalLabel">Weather Dashboard</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src="./img/dashboardExample.PNG" className="img-fluid rounded" alt="weather dashboard modal img" />
                <p>Utilizing the free OpenWeather API, this application retrieves weather data for cities for the current day, as well as a five-day forecast. The last ten searched cities are saved in local storage and displayed on the screen so the user can easily check a previously searched city.
                </p>
                <p> GitHub : <a href="https://github.com/virlym/hw6-weather-forecast" target="_blank" rel="noopener noreferrer">link</a>
                </p>
                <p>Deployed : <a href="https://virlym.github.io/hw6-weather-forecast/" target="_blank" rel="noopener noreferrer">link</a>
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </aside>
      </article>
    </section>
    <section class="row">
      <article class="col-lg-6">
        <img src="./img/passwordGeneratorSized.PNG" class="figure-img img-fluid rounded folio-img" id = "passGenPic" alt="Password Generator img" data-toggle="modal" data-target="#passModal" />
        <figcaption> Password Generator </figcaption>
        <aside class="modal fade" id="passModal" tabindex="-1" role="dialog" aria-labelledby="passModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="passModalLabel">Password Generator</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img src="./img/passwordGenerator.PNG" class="img-fluid rounded" alt="password generator modal img" />
                <p>Utilizing existing HTML and CSS, javascript code was written to generate a password based on user inputs. When the user presses the generate password button, they will be prompted with a series of questions. A password is then constructed using random values of the selected inputs until it is the desired length.
                </p>
                <p> GitHub : <a href="https://github.com/virlym/hw3-password-generator" target="_blank" rel="noopener noreferrer">link</a>
                </p>
                <p>Deployed : <a href="https://virlym.github.io/hw3-password-generator/" target="_blank" rel="noopener noreferrer">link</a>
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </aside>
      </article>
      <article class="col-lg-6">
        <img src="./img/tcwHomePageSized.png" class="figure-img img-fluid rounded folio-img" id = "tcwHomePic" alt="The Cold West img" data-toggle="modal" data-target="#tcwModal" />
        <figcaption> The Cold West </figcaption>
        <aside class="modal fade" id="tcwModal" tabindex="-1" role="dialog" aria-labelledby="tcwModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="tcwModalLabel">The Cold West</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img src="./img/tcwHomePage.png" class="img-fluid rounded" alt="The Cold West modal img" />
                <p>The Cold West is a web app that allows the user to get detailed information on ten of Washington's ski resorts and some activities they have. There is an option to create an account that will allow the user to save a favorite resort and activity. By saving a favorite, that will move quick access links to the user's dashboard for more direct access to the info page in the app as well as the resort's own home page.
                </p>
                <p> GitHub : <a href="https://github.com/kbnewlon/Cold-West-Tours" target="_blank" rel="noopener noreferrer">link</a>
                </p>
                <p>Deployed : <a href="https://the-cold-west.herokuapp.com/" target="_blank" rel="noopener noreferrer">link</a>
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </aside>
      </article>
    </section>
    <section class="row">
      <article class="col-lg-6">
        <img src="https://placekitten.com/350/350" class="figure-img img-fluid rounded folio-img" alt="placeholder img" />
      </article>
      <article class="col-lg-6">
      </article>
    </section>
  </main>
  );
}

export default Portfolio;