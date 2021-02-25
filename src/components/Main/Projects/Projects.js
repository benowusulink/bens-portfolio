import React from "react";
import "./Projects.css";
import Navbar2 from "../../Navbars/Navbar2/Navbar2.js";
import br from "./assets/br.png";
import jg from "./assets/jg.png";
import bg from "./assets/bg.png";
import on from "./assets/on.png";
import rbf from "./assets/rbf.png";
import onapi from "./assets/onapi.png";

const Projects = ({ onRouteChange }) => {
  return (
    <main className={`projects-main`}>
      <Navbar2 onRouteChange={onRouteChange} />
      <main className={`projects-content`}>
        <section className={`projects-header`}>
          <h2>{`Projects`}</h2>
          <a href={`https://github.com/benowusulink`} className={`github-info`}>
            <ion-icon name="logo-github"></ion-icon>
            <p>benowusulink</p>
          </a>
        </section>
        <section className={`projects-div`}>
          <div className={`projects-div-1`}>
            <article className={`projects-section`}>
              <a
                href="https://benowusulink.github.io/landing-page-html-css/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6> (click image to go to webapp)</h6>
                <h4 className={`underline`}>Bens Restaurant</h4>
                <img src={br} alt={`project-1`} />
                <p className={`underline`}>General website information</p>

                <p>
                  This website is a basic generic landing page.
                  <br /> <br />
                  The aim of this website was to make a beautiful and functional
                  landing page taking advantage of HTML and CSS programming
                  languages only to showcase my skills with the programming
                  languages.
                </p>
                <p className={`underline`}>
                  Programming Languages and tools used
                </p>
                <ul>
                  <li className={`languages`}>- HTML & HTML5</li>
                  <li className={`languages`}>- CSS & CSS3</li>
                  <li className={`languages`}>- Google fonts API (font)</li>
                  <li className={`languages`}>- Ion Icons API (icons)</li>
                  <li className={`languages`}>- prettier (mount code)</li>
                </ul>
              </a>
            </article>
            <article className={`projects-section`}>
              <a
                href="https://benowusulink.github.io/javascript-games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6> (click image to go to webapp)</h6>
                <h4 className={`underline`}>Javascript Games</h4>
                <img src={jg} alt={`project-1`} />
                <p className={`underline`}>General website information</p>

                <p>
                  This website holds two multiplayer games created with basic
                  HTML, CSS and javacript.
                  <br />
                  <br />
                  The first game is tic-tac-toe. The aim whilst creating this
                  game was to utilise features of HTML, CSS and Javacript.
                  <br />
                  <br />
                  The second game is called the javascript pig game. The aim
                  whilst creating this game was to utilise features of HTML, CSS
                  and Javacript.
                  <br />
                  <br />
                  (More info in the read me of the apps repo)
                </p>
                <p className={`underline`}>
                  Programming Languages and tools used
                </p>
                <ul>
                  <li className={`languages`}>- HTML & HTML5</li>
                  <li className={`languages`}>- CSS & CSS3</li>
                  <li className={`languages`}>- Javascript</li>
                  <li className={`languages`}>- Webpack (server)</li>
                  <li className={`languages`}>- Eslint (error management)</li>
                  <li className={`languages`}>- Webpack (server)</li>
                  <li className={`languages`}>- Babel (Javascript compiler)</li>
                </ul>
              </a>
            </article>
            <article className={`projects-section`}>
              <a
                href="https://benowusulink.github.io/background-generator-html-css-js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6> (click image to go to webapp)</h6>
                <h4 className={`underline`}>Background Generator</h4>
                <img src={bg} alt={`project-1`} />
                <p className={`underline`}>General website information</p>

                <p>
                  This website is a basic generic landing page for selecting
                  linear RGBA values for background image properties within CSS.
                  <br />
                  <br />
                  The aim of this website is to showcase simplistic HTML, CSS
                  and JAVASCRIPT usage.
                </p>
                <p className={`underline`}>
                  Programming Languages and tools used
                </p>
                <ul>
                  <li className={`languages`}>- HTML & HTML5</li>
                  <li className={`languages`}>- CSS & CSS3</li>
                  <li className={`languages`}>- Javascript</li>
                  <li className={`languages`}>- Google fonts API (font)</li>
                  <li className={`languages`}>- Babel (Javascript compiler)</li>
                </ul>
              </a>
            </article>
          </div>
          <div className={`projects-div-2`}>
            <article className={`projects-section`}>
              <a
                href="https://benowusulink.github.io/robot-friends/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6> (click image to go to webapp)</h6>
                <h4 className={`underline`}>(React & Redux) Robofriends</h4>
                <img src={rbf} alt={`project-1`} />
                <p className={`underline`}>General website information</p>

                <p>
                  This web app is a basic react and redux app meant to showcase
                  the ultilasation of the programming language and state
                  management tool. <br />
                  <br />
                  This is a SPA (single page application) which requests data
                  from an json API.
                  <br />
                  <br />
                  The use of React Components, Lifecycle methods, API calls and
                  redux are the cofe of this app.
                </p>
                <p className={`underline`}>
                  Programming Languages and tools used
                </p>
                <ul>
                  <li className={`languages`}>- HTML & HTML5</li>
                  <li className={`languages`}>- CSS & CSS3</li>
                  <li className={`languages`}>- Javascript</li>
                  <li className={`languages`}>- React</li>
                  <li className={`languages`}>
                    - Redux (state management tool)
                  </li>
                  <li className={`languages`}>
                    - Tachyons (shortcut CSS styling)
                  </li>
                  <li className={`languages`}>- Prettier (mount code)</li>
                  <li className={`languages`}>
                    - npx create-react-app (template react app)
                  </li>
                  <li className={`languages`}>
                    - Redux Thunk (allows you to return functions from actions)
                  </li>
                  <li className={`languages`}>
                    - Redux Logger (automatic console logs progress through app)
                  </li>
                </ul>
              </a>
            </article>
            <article className={`projects-section`}>
              <a
                href="https://benowusulink.github.io/online-notebook/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6> (click image to go to webapp)</h6>
                <h4 className={`underline`}>(React) Online Notebook</h4>
                <img src={on} alt={`project-1`} />
                <p className={`underline`}>General website information</p>

                <p>
                  This is the client for a full stack application which includes
                  an API server and database.
                  <br />
                  <br />
                  The client for this app is a notebook which first allows you
                  to create an account and login, create as many notes as you
                  want and store it within the app via the database and then
                  logout.
                  <br />
                  <br />
                  The notes you save will persist as there is datasbase as
                  mentioned before so after you logout and log back in the data
                  will last.
                </p>
                <p>(More info in the repo of the web app)</p>
                <p className={`underline`}>
                  Programming Languages and tools used
                </p>
                <ul>
                  <li className={`languages`}>- Javascript</li>
                  <li className={`languages`}>- React</li>
                  <li className={`languages`}>- Prettier (mount code)</li>
                  <li className={`languages`}>
                    - Bcrypt (End to end encryption)
                  </li>
                </ul>
              </a>
            </article>
            <article className={`projects-section`}>
              <a
                href="https://github.com/benowusulink/online-notebook-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6> (click image to go to webapp)</h6>
                <h4 className={`underline`}>(Node) Online Notebook API</h4>
                <img src={onapi} alt={`project-1`} />
                <p className={`underline`}>General information</p>

                <p>
                  This application is an API which responds with data from a
                  postgresql database to a client app.
                  <br />
                  <br />
                  The aim of this application was to create a simple API server
                  using javascript technologies which will provide a link
                  between the client and database of the app.
                </p>

                <p className={`underline`}>
                  Programming Languages and tools used
                </p>
                <ul>
                  <li className={`languages`}>- Node.js (Javascript)</li>
                  <li className={`languages`}>- Express.js (Server)</li>
                  <li className={`languages`}>
                    - Postgresql (Relational database)
                  </li>
                  <li className={`languages`}>- Knex (Sql query builder)</li>
                  <li className={`languages`}>- Cors (Server access)</li>
                  <li className={`languages`}>
                    - Body-Parser (Access to body of client request)
                  </li>
                  <li className={`languages`}>
                    - Bcrypt (End to end encryption)
                  </li>
                </ul>
              </a>
            </article>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Projects;
