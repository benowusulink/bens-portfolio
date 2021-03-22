import React from "react";
import "./Who-i-am.css";
import profile from "../../../assets/profile.png";
import Navbar2 from "../../Navbars/Navbar2/Navbar2.js";
import anime from "./assets/anime.jpg";
import it from "./assets/it.jpg";
import football from "./assets/football.jpg";
import music from "./assets/music.jpg";
import travel from "./assets/travel.jpg";
import fitness from "./assets/fitness.jpg";

const WhoIAm = ({ onRouteChange }) => {
  return (
    <main className={`who-i-am-main`}>
      <Navbar2 onRouteChange={onRouteChange} />

      <main className={`who-i-am-content`}>
        <h2>{`who i am`}</h2>

        <section className={`who-i-am-section1`}>
          <img src={profile} id={`who-i-am-img`} alt={`profile pic`} />

          <article className={"tools1"}>
            <h3> Contents </h3>
            <ul>
              <li>
                - Genral Information: <a href="#general-info">Click here </a>
              </li>
              <li>
                - Education: <a href="#Education">Click here </a>
              </li>
              <li>
                - Work experience: <a href="#Work-Experience">Click here </a>
              </li>
              <li>
                - Personaltiy: <a href="#Personality">Click here </a>
              </li>
              <li>
                - Interests: <a href="#Interests">Click here </a>
              </li>
            </ul>
          </article>
        </section>

        <section id={`who-i-am-info`}>
          <article>
            <h4 className={`center`} id={`general-info`}>
              {" "}
              General Information{" "}
            </h4>
            <p className={`border-btmm`}>
              {`Name: Benjamin Owusu-Sekyere`}
              <br />
              <br />
              {`Date of Birth: 03/05/1993`}
              <br />
              <br />
              {`Contact number: 07340176983`}
              <br />
              <br />
              {`Email: benowusu@hotmail.co.uk`}
              <br />
              <br />
              {`Right to work in the UK: Yes`}
              <br />
              <br />
              {`Github: benowusulink`}
              <br />
              <br />
            </p>
            <p className={`border-btmm`}>
              {`Hello there ! first and foremost thank you for taking the time to visit
        my personal website :), it is very much appreciated and really hope you like what 
        you see.`}
              <br />
              <br />
              {`Introducing myself my name is Ben and I am aspiring, young and exciting
           full stack developer with experience making web applications using the
           latest industry tools and practices with extensive detail and efficiency 
           on the client, server and database. (mouthful right)`}
              <br />
              <br />
              {`
          I am a determined individual who is excited to take the next leap within the web development industry.
          My goals and aspirations are to continue learning new skills, tools
          and languages to help further my knowledge and experience in an industry
          i love and enjoy working and participating within.
          I have demonstrated through years of self learning, on the job training
           and creating personal projects 
           that I have the ambition, temperament and intelligence to succeed and 
           grow within the sector.`}
              <br />
              <br />
              {`I would love to use my skillset, knowledge and experience to help contribute, 
        grow and establish myself within an professional and welcoming organization. I am 
        looking for the opportunity to learn and solidify myself as an invaluable asset within my 
        team of work colleagues and overall organization to provide the best results for myself and
        team.`}
              <br />
              <br />
            </p>

            <h4 className={`center`} id={`Education`}>
              {" "}
              Education{" "}
            </h4>
            <p className={`border-btmm`}>
              {`Institution: St.Josephs College`}
              <br />
              <br />
              {`Date: 2004-2012`}
              <br />
              <br />
              {`Awards:`}
              <br />
              {`GCSE: 11 GCSE's grade 'C' and above including maths and english.`}
              <br />
              <br />
              {`A levels:`}
              <br />
              {`Business Studies: C`}
              <br />
              {`Religious Studies: C`}
              <br />
              {`Pyschology: B`}
              <br />
              <br />
            </p>
            <p className={`border-btmm`}>
              {`Institution: London South Bank University`}
              <br />
              <br />
              {`Date: sept 2015-2018`}
              <br />
              <br />
              {`Course: Business with Finance`}
              <br />
              <br />
              {`Awards: 2:1`}
              <br />
              <br />
            </p>

            <h4 className={`center`} id={`Work-Experience`}>
              {" "}
              Work Experience
            </h4>
            <p className={`border-btmm`}>
              {`Company: Sparta Global`}
              <br />
              <br />
              {`Date: Jan 2018 - Nov 2019`}
              <br />
              <br />
              {`Role: Junior Developer`}
              <br />
              <br />
              {`Responsibilities:`}
              <br />
              <br />
              {`- Completion of 13 weeks on the job training program which includes learning web development technology fundamentals to advanced concepts.`}
              <br />
              {`- Agile`}
              <br />
              {`- Scrum`}
              <br />
              {`- Working on detailed individual and group projects with a deadline`}
              <br />
              {`- Coordinating with third party companies on projects and working to a deadline`}
              <br />
              {`- Administration duties`}
              <br />
              {`- Technical support`}
              <br />
              {`- Supporting, maintaining and updating current technologies`}
              <br />
              <br />
            </p>

            <h4 className={`center`} id={`Personality`}>
              {" "}
              Personality
            </h4>
            <p className={`border-btmm`}>
              {`To describe myself in 3 words I would say I am a motivated, organized
          and knowledgeable character who always looks for the most efficient
          outcome in everything that I’m involved in.`}
              <br />
              <br />
              {`With every task i am involved in or any opportunity i'm given i am always
          motivated and passionate to complete it above and beyond the best of my 
          ability by seeking and applying knowledge and experience through relevant 
          sources of information and my own expertise.`}
              <br />
              <br />
              {`My daily routines whether in a work or day to day capacity is always structured
        and organized allowing me the opportunity to excel and provide maximum focus on the 
        tasks in hand to the best of my ability.`}
              <br />
              <br />
            </p>

            <h4 className={`center`} id={`Interests`}>
              {" "}
              Interests
            </h4>
            <p>
              {`For this section I have decided to take photos of items in my personal space
        as I believe they help represent a true reflection of my interests.`}
              <br />
              <br />
            </p>
            <h4 className={`center`} id={`Interests`}>
              {" "}
              I.T and development
            </h4>
            <article className={`interest-section`}>
              <img src={it} alt={`it`} />
              <p>
                {`My passion for I.T has honestly existed for as long as I can remember.
        I have always been in awe of great pioneers within the industry like 
        Steve jobs, William Gates III, Mark Zuckerberg etc. I have always had 
        an interest into how things in general are made from the ground up and 
        have always enjoyed taking this apart piece by piece to learn how everything 
        functions. In my personal time i am always looking to strengthen my knowledge
        to keep up with the industry and personal trends.`}
                <br />
                <br />
              </p>
            </article>
            <h4 className={`center`} id={`Interests`}>
              {" "}
              Football
            </h4>
            <article className={`interest-section`}>
              <img src={football} alt={`football`} />
              <p>
                {`I am a huge fan of football in general with my supporting team being 
          the red devils (ole in !). I love to watch games live and occasions 
          take part socially with friends (I am really good!!).`}
                <br />
                <br />
              </p>
            </article>
            <h4 className={`center`} id={`Interests`}>
              {" "}
              Anime/Manga/Literature
            </h4>
            <article className={`interest-section`}>
              <img src={anime} alt={`anime`} />
              <p>
                {`I have a deep passion for literature in general but have a deep interest in novels,
          movies, anime and manga. I love reading/watching stories with great adventure 
          building, strong themes, great characters, plot depth amongst many other things.
          The greatest stories I have ever seen are both the manga One piece - Echiro Oda and Novel a 
          song of ice of fire - George RR Martin`}
                <br />
                <br />
              </p>
            </article>
            <h4 className={`center`} id={`Interests`}>
              {" "}
              Travel
            </h4>
            <article className={`interest-section`}>
              <img src={travel} alt={`travel`} />
              <p>
                {`'Most people live and die in the same corner they are born' - prince Oberyn (Game of thrones).
        Maybe this quote exaggerates my point but quotes like this have always motivated me to travel and 
        witness the great places and phenomenons our beautiful globe has to offer.`}
                <br />
                <br />
              </p>
            </article>
            <h4 className={`center`} id={`Interests`}>
              {" "}
              Music
            </h4>
            <article className={`interest-section`}>
              <img src={music} alt={`music`} />
              <p>
                {`Most people live and die in the same corner they are born' - prince Oberyn (Game of thrones).
        Maybe this quote exaggerates my point but quotes like this have always motivated me to travel and 
        witness the great places and phenomenon’s our beautiful globe has to offer.`}
                <br />
                <br />
              </p>
            </article>
            <h4 className={`center`} id={`Interests`}>
              {" "}
              Fitness
            </h4>
            <article className={`interest-section`}>
              <img src={fitness} alt={`fitness`} />
              <p>
                {`I am someone who has decided to make a lifelong commitment to my fitness by eating 
          as healthy as I can and exercising frequently 3/4 times a week. I am someone that focuses
          on weight-lifting and strength training.`}
                <br />
                <br />
              </p>
            </article>
          </article>
        </section>
      </main>
    </main>
  );
};

export default WhoIAm;
