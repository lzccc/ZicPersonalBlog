import { useEffect } from "react";
import { zic } from "../layouts/utils";

const Skills = () => {
  useEffect(() => {
    zic.activeSkillProgress();
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Skills</h3>
              <p className="text-uppercase small">
                A backend developer in Shenzhen
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 m-15px-tb">
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">AWS</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={92}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Spring Boot</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={86}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>86%</span>
                </div>
              </div>
            </div>
            {/* /skill */}
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Redis</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={88}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>88%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">MySQL</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={88}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>88%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 m-15px-tb">
            <div className="row">
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-language" />
                  </div>
                  <div className="media-body">
                    <h5>GRE 325+</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-trophy" />
                  </div>
                  <div className="media-body">
                    <h5>First-class Scholarship</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-graduation-cap" />
                  </div>
                  <div className="media-body">
                    <h5>Master's in SWE</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i class="fas fa-briefcase"></i>
                  </div>
                  <div className="media-body">
                    <h5>2 Years Backend Experience</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
