import { Fragment, useEffect } from "react";
import Footer from "@/src/layouts/Footer";
import { zic } from "@/src/layouts/utils";
import { LastestBlog } from "@/src/components/Blog";
import { CustomizedDialogs } from "@/src/components/Dialog";
import Header from "@/src/components/Header";

const AllBlogs = () => {
  useEffect(() => {
    zic.scrollToActiveNav();
  }, []);

  return (
    <Fragment>
      {/* Home Banner */}
      <Header />
      <main className="main-left">
        <section id="blog" className="section white-bg">
          <div
            className="container"
            style={{ minHeight: window.innerHeight - 150 }}
          >
            <div className="row sm-m-25px-b m-35px-b">
              <div className="col-md-12">
                <div className="section-title">
                  <h3 className="dark-color text-uppercase">All Blogs</h3>
                  <p className="text-uppercase small">Search</p>
                </div>
              </div>
            </div>
            <LastestBlog />
          </div>
        </section>
      </main>
      <CustomizedDialogs />
      <Footer />
    </Fragment>
  );
};

export default AllBlogs;
