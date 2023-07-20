import { useState, useContext } from "react";
import strings from "@/src/utils/globalString";
import { AuthContext } from "@/src/components/AuthContext";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const { name, email, subject, message } = mailData;
  const { username, password } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
    } else {
      console.log("Try sending email");
      try {
        const response = await fetch(strings.serverURL + `/api/email`, {
          method: "POST",
          headers: {
            Authorization: "Basic " + btoa(username + ":" + password),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mailData),
        });

        if (response.ok) {
          console.log("Email sent successfully!");
        } else {
          alert("An error occurred while sending the email.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while sending the email.");
      }
    }
  };

  return (
    <section id="contactus" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Get in touch</h3>
              <p className="text-uppercase small">Contact Me!</p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="row justify-content-center">
          <div className="col-lg-8 m-15px-tb">
            <div className="contact-form box-shadow">
              <h4 className="dark-color font-alt m-20px-b">Say Something</h4>
              <form onSubmit={(e) => onSubmit(e)} className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      id="name"
                      placeholder="Name *"
                      className={`form-control ${
                        error ? (name.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="text"
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      id="email"
                      placeholder="Email *"
                      className={`form-control ${
                        error ? (email.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="email"
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="subject"
                      onChange={(e) => onChange(e)}
                      value={subject}
                      id="subject"
                      placeholder="Subject *"
                      className={`form-control ${
                        error ? (subject.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="text"
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                      id="message"
                      placeholder="Your message *"
                      rows={3}
                      className={`form-control ${
                        error ? (message.length !== 0 ? "" : "invalid") : ""
                      }`}
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button
                      className="m-btn m-btn-theme"
                      type="submit"
                      value="Send"
                    >
                      {" "}
                      send message
                    </button>
                  </div>
                  <span
                    id="suce_message"
                    className="text-success"
                    style={{ display: success ? "block" : "none" }}
                  >
                    Message Sent Successfully
                  </span>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-lg-4 m-15px-tb"></div>
        </div>
        {/* end form */}
      </div>
    </section>
  );
};
export default Contact;
