function Contact() {
  return (
    <section className="Contact" id="Contact">
      <h1 className="title">Contacts</h1>

      <div className="content1">
        <div className="form-section">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Type your message...."
            ></textarea>

            <button type="submit" className="send-btn">
              Send{" "}
              <span className="icon">
                <i
                  style={{ color: "#FFFFFF", marginLeft: "5px" }}
                  className="fa-solid fa-paper-plane"
                ></i>
              </span>
            </button>
          </form>
        </div>

        <div className="info-section">
          <div className="social-media">
            <p>
              <span className="icon">
                <a
                  href="mailto:abush.zaid@gmail.com"
                  style={{ color: "#00FFFF", textDecoration: "none" }}
                >
                  <i className="fa-solid fa-at"></i>
                </a>
              </span>{" "}
              abush.zaid@gmail.com
            </p>
            <p>
              <span className="icon">
                <i
                  style={{ color: "#00FFFF" }}
                  className="fa-solid fa-phone"
                ></i>
              </span>{" "}
              962797876313
            </p>
            <p>
              <span className="icon">
                <a
                  href="https://maps.app.goo.gl/gsjdjCRRcEsvjWro9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#00FFFF", textDecoration: "none" }}
                >
                  <i className="fa-solid fa-map-pin"></i>
                </a>
              </span>{" "}
              Jordan, Amman
            </p>
          </div>

          <div className="social-icons">
            <span>
              <a
                href="https://github.com/zaidahmaid"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#181c2c", textDecoration: "none" }}
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/zaid-abu-shanab-176721250/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#181c2c", textDecoration: "none" }}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/zaid.ahmad.7140/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#181c2c", textDecoration: "none" }}
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/zaid_ahmad_2001/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#181c2c", textDecoration: "none" }}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
    
    
  );
}

export default Contact;
