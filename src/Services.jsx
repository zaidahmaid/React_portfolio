import ser from "./assets/services.svg";
function Services() {
  return (
    <section class="services" id="services">
      <div class="services-description">
        <h2>Services</h2>
        <div class="services-list">
          <div class="service-card">
            <div>
              <h4 style={{ marginTop: "5px" }}>
                API Development and Integration
              </h4>
              <p>
                I design and implement RESTful APIs to seamlessly connect
                systems and enhance functionality, I ensure smooth communication
                between services.
              </p>
            </div>
          </div>
          <div class="service-card">
            <div>
              <h4>Web Application Development</h4>
              <p>
                I build end-to-end web applications, combining intuitive
                front-end interfaces with efficient back-end systems. Whether
                it's a dynamic website or a complex application.
              </p>
            </div>
          </div>
          <div class="service-card">
            <div>
              <h4>Bug Fixing and Maintenance</h4>
              <p>
                I ensure your applications run smoothly by fixing issues and
                keeping them up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-img">
        <img src={ser} alt="Work illustrations by Storyset" width="300" />
      </div>
    </section>
  );
}
export default Services;
