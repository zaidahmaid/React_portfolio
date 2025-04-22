import myimg from "./assets/my_pic.png";
function Hero() {
  return (
    <section className="hero">
      <div className="f-half"></div>
      <div className="s-half">
        <img src={myimg} alt="my_pic" />
        <div className="content">
          <p>Full Stack Developer</p>
          <h1>Zaid Abu Shanab</h1>
          <p>
            A computer engineering graduate and full-stack trainer, I craft
            digital solutions while empowering others to create. My portfolio
            reflects a passion for innovation, clean code, and purposeful design
            in the evolving tech landscape.
          </p>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
