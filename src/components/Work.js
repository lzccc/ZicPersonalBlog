import Isotope from "isotope-layout";
import { useEffect, useRef } from "react";

const Life = () => {
  // Isotope
  const isotope = useRef();
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Life</h3>
              <p className="text-uppercase small">
                A BACKEND DEVELOPER IN SHENZHEN
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/me6.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>All Photoes</h5>
              </div>
              <a className="link-overlay" href="#work" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/ZichongPhoto.jpeg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>All Photoes</h5>
              </div>
              <a className="link-overlay" href="#work" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/me5.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>All Photoes</h5>
              </div>
              <a className="link-overlay" href="#work" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/me2.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>All Photoes</h5>
              </div>
              <a className="link-overlay" href="#work" />
            </div>
          </div>{" "}
          {/* grid item */}
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Life;
