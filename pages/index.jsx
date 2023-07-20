import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import PersonalZone from "@/src/components/PersonalZone";
import { zic } from "@/src/layouts/utils";
import { Fragment, useEffect, useState } from "react";

import Services from "@/src/components/Projects";
import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";
import dynamic from "next/dynamic";
import strings from "@/src/utils/globalString";
import Header from "@/src/components/Header";
import { LoginDialog } from "@/src/components/Dialog";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const LoginButton = () => {
  let [open, setOpen] = useState(false);
  const buttonStyle = {
    position: "fixed",
    top: "25px",
    right: "25px",
  };
  const handleClick = () => {
    console.log("handleclick");
    setOpen(true);
  };

  return (
    <div>
      <LoginDialog login={open} setLogin={setOpen}></LoginDialog>
      <div style={buttonStyle}>
        {" "}
        <a onClick={handleClick}>
          <i className="far fa-user fa-lg" />
        </a>
      </div>
    </div>
  );
};

async function fetchQuote() {
  const serviceLink = strings.serverURL + "/api/idea";
  try {
    const response = await fetch(serviceLink);
    if (!response.ok) {
      console.error("Request failed");
      return;
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

function DailyQuote() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    // Make an API request or fetch data from the server
    // Update the state with the response data
    fetchQuote().then((responseData) => {
      setData(responseData);
    });
  }, []);

  return <div>{data}</div>;
}

const Index1 = () => {
  useEffect(() => {
    zic.scrollToActiveNav();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <Header />
      <main className="main-left">
        {/* Home Banner */}
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(static/img/home-banner.jpg)" }}
        >
          <LoginButton />
          <div className="container">
            <div className="row full-screen align-items-center p-100px-tb">
              <div className="col-md-6">
                <div className="ht-text">
                  <h6>Hello there...</h6>
                  <h1>Zichong Li</h1>
                  <h2>
                    I Am Passionate <TypingAnimation />
                  </h2>
                  <DailyQuote />
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#work">
                      my work
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactus">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="go-to go-to-next">
            <a href="#about">
              <span />
            </a>
          </div>
        </section>
        {/* End Home Banner */}

        {/* End Home Banner */}
        {/* about us */}
        <About />
        {/* end about us */}
        {/* fun */}
        <Skills />
        {/* End fun */}
        {/* resume */}
        <Services />
        {/* End resume */}
        {/* Work */}
        <Work />
        {/* End work */}
        {/* Testiminails */}
        <PersonalZone />
        {/* End Testiminails */}
        {/* Blog */}
        <Blog />
        {/* End Blog */}
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};
export default Index1;
