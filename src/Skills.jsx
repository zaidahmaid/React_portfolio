import hpic from "./assets/html5-brands-solid.svg";
import spic from "./assets/css3-alt-brands-solid.svg";
import jpic from "./assets/js-brands-solid.svg";
import lpic from "./assets/laravel-brands-solid.svg";
import pPic from "./assets/php-brands-solid.svg";
import rpic from "./assets/react-brands-solid.svg";

function Skills() {
  return (
    <section>
      <div className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skillsContainer">
          <div className="skill-card">
            <img src={hpic} height="48px" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <img src={spic} height="48px" alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill-card">
            <img src={jpic} height="48px" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="skillsContainer">
          <div className="skill-card">
            <img src={pPic} height="48px" alt="PHP" />
            <p>PHP</p>
          </div>
          <div className="skill-card">
            <img src={lpic} height="48px" alt="Laravel" />
            <p>Laravel</p>
          </div>
          <div className="skill-card">
            <img src={rpic} height="48px" alt="React" />
            <p>React</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
