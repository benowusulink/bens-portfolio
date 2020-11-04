import React from "react";
import "./Projects.css";
import Navbar2 from '../../Navbars/Navbar2/Navbar2.js';

const Projects = ({onRouteChange}) => {

    return (
      <main className={`projects-main`}>
      <Navbar2 onRouteChange = {onRouteChange}/>
      <main className ={`projects-content`}>
        <section className={`projects-header`}>
          <h2>{`Projects`}</h2>
           <a href = {`https://github.com/benowusulink`} className={`github-info`}>
            <ion-icon name="logo-github"></ion-icon>
            <p>benowusulink</p>
            </a>
          
        </section>
        <section className={`projects-div`}>
          <div className={`projects-div-1`}>
            <article className={`projects-section`}>
              <h4>hello</h4>
              <img src={``} alt={`project-1`} />
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
            </article>
            <article className={`projects-section`}>
              <h4>hello</h4>
              <img src={``} alt={`project-2`} />
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
            </article>
            <article className={`projects-section`}>
              <h4>hello</h4>
              <img src={``} alt={`project-3`} />
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
            </article>
          </div>
          <div className={`projects-div-2`}>
            <article className={`projects-section`}>
              <h4>hello</h4>
              <img src={``} alt={`project-4`} />
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
            </article>
            <article className={`projects-section`}>
              <h4>hello</h4>
              <img src={``} alt={`project-5`} />
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
            </article>
            <article className={`projects-section`}>
              <h4>hello</h4>
              <img src={``} alt={`project-6`} />
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
              <p>
                Our mission: to help people learn to code for free. We
                accomplish this by creating
              </p>
            </article>
          </div>
        </section>
      </main>
      </main>
    );
}
  

export default Projects;
