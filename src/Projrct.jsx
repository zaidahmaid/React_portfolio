import fit from "./assets/fit.png";
import flower from "./assets/flower.png"
import med from "./assets/med.png"
function Project() {
  return (
    <section class="project" id="project">
      <div class="project-description">
        <h2>Projects</h2>
      </div>
      <div class="project-list">
        <a
          href="https://github.com/zaidahmaid/group1.git"
          target="blank"
          style={{ textDecoration: "none" }}
       
        >
          <img src={fit} alt="Fitnes project " className="project-card" />
          <h3 className="card_text">Fitness project</h3>
        </a>
        <a
          href="https://github.com/zaidahmaid/php_project.git"
          target="blank"
          style={{ textDecoration: "none" }}
         
        >
          <img src={flower} alt="flower project " className="project-card" />
          <h3 className="card_text">Flower project</h3>
        </a>
        <a
          href="https://github.com/zaidahmaid/group1.git"
          target="blank"
          style={{ textDecoration: "none" }}
        
        >
          <img src={med} alt="flower project " className="project-card" />
          <h3 className="card_text">MedXpert project</h3>
        </a>
      </div>
    </section>
  );
}
export default Project;
