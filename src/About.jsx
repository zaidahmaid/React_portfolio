import dev from "./assets/developer.svg";
function About() {
  return (
    <section class="about" id="about">
      <div class="line-styling">
        <div class="style-circle"></div>
        <div class="style-circle"></div>
        <div class="style-line"></div>
      </div>
      <div class="info">
        <div class="about-description">
          <h2>About Me</h2>
          <p>
            I'm a passionate computer engineering graduate and full-stack
            development trainer with a drive for creating innovative, efficient,
            and user-focused solutions. With a strong foundation in software
            engineering and hands-on experience as a trainer, I thrive on
            teaching others while continuously expanding my own skills. My
            portfolio reflects my journey as a developer, showcasing projects
            that emphasize clean code, optimized performance, and secure design.
            I'm dedicated to staying at the forefront of technology, blending
            problem-solving skills with creativity to build meaningful digital
            experiences.
          </p>
        </div>
        <div class="about-img">
          <img src={dev} alt="Work illustrations by Storyset" width="300" />
        </div>
      </div>
    </section>
  );
}
export default About;
