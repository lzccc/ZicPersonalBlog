import strings from "@/src/utils/globalString";

const CVLink = strings.serverURL + "/api/cv";
const About = () => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                A programmer, a purveyor of innovation and a good man
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="static/img/ZichongPhoto.jpeg" alt="image" />
              <div className="nav social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4>I'M Zichong Li</h4>
              <h6>
                <span className="theme-color">PROGRAMMER</span>, A PURVEYOR OF{" "}
                <span className="theme-color">INNOVATION</span> AND A{" "}
                <span className="theme-color">GOOD MAN</span>
              </h6>
              <p>
                Experienced Software Engineer with 2 years of professional
                experience as a backend developer in AWS. Proficient in a range
                of backend technologies, including Java, Python, AWS, MySQL,
                Kafka, and Redis. Skilled in building high-performance,
                high-availability, and scalable distributed services.
                Demonstrated expertise in designing and implementing robust
                architectures that meet stringent performance and reliability
                requirements. Strong problem-solving skills and a proactive
                approach to addressing technical challenges.
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Birthday</label>
                    <p> Sep 5th, 1997</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>25 Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p>China</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>Shenzhen, Guangdong</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>lizichong@hotmail.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>186-8152-7081</p>
                  </div>
                  <div className="media">
                    <label>WeChat</label>
                    <p>lzc081</p>
                  </div>
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a class="m-btn m-btn-theme" href={CVLink} download>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
