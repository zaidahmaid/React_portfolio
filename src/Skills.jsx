import hpic from "./assets/html5-brands-solid.svg";
import spic from "./assets/css3-alt-brands-solid.svg";
import jpic from "./assets/js-brands-solid.svg";

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
      </div>
    </section>
  );
}

export default Skills;
