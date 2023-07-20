import { useRouter } from "next/router";
import { Fragment, useEffect, useState, useContext } from "react";
import { zic } from "@/src/layouts/utils";
import ReactMarkdown from "react-markdown";
import Footer from "@/src/layouts/Footer";
import MarkDownEditor from "@/src/components/MarkDownEditor";
import "github-markdown-css/github-markdown-light.css";
import { motion } from "framer-motion";
import strings from "@/src/utils/globalString";
import { AuthContext } from "@/src/components/AuthContext";

const buttonStyle = {
  backgroundColor: "#d9832e",
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  float: "right",
  marginLeft: "10px",
};

let previousText;

const MarkdownViewer = () => {
  const router = useRouter();
  const { id } = router.query; // Access the parameter value
  const [editorMode, setEditorMode] = useState(false);
  const { username, password } = useContext(AuthContext);
  const handleEditClick = () => {
    if (editorMode) {
      handleSave(markdownSource);
    }
    previousText = markdownSource;
    setEditorMode(!editorMode);
  };

  const handleCancelClick = () => {
    updateSource(previousText);
    setEditorMode(!editorMode);
  };

  const handleSave = async (content) => {
    if (!id) {
      console.log(content);
      return;
    }
    try {
      const response = await fetch(strings.serverURL + `/api/mdfile/${id}`, {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa(username + ":" + password),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        console.log("Content saved successfully!");
      } else {
        alert("An error occurred while saving the content.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving the content.");
    }
  };

  const [markdownSource, setMarkdownSource] = useState("");
  useEffect(() => {
    if (!id) {
      console.log("empty id!");
      return;
    }
    fetch(strings.serverURL + `/api/mdfile?mdfileid=${id}`)
      .then((response) => response.text())
      .then((data) => setMarkdownSource(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateSource = (newtext) => {
    setMarkdownSource(newtext);
  };
  return (
    <div
      style={{
        marginTop: "5vh",
        marginRight: "10vw",
        marginLeft: "10vw",
        marginBottom: "5vw",
        minHeight: window.innerHeight - 150,
      }}
    >
      <div className="markdown-body">
        {!editorMode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <ReactMarkdown
              className="markdown-content"
              children={markdownSource}
            />
          </motion.div>
        )}
      </div>

      {editorMode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <MarkDownEditor
            content={markdownSource}
            updateSource={updateSource}
            saveContent={handleSave}
          />
        </motion.div>
      )}
      <div style={{ marginBottom: 70 }}>
        <button style={buttonStyle} onClick={handleEditClick}>
          {editorMode ? "Save" : "Edit"}
        </button>
        {editorMode && (
          <button style={buttonStyle} onClick={handleCancelClick}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

const BlogDisplayer = () => {
  useEffect(() => {
    zic.scrollToActiveNav();
  }, []);
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      {/* Home Banner */}
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="index.html">
              ZIC
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle"
      >
        <div className="navbar-brand">
          <a className="logo-text" href="/">
            ZIC
          </a>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="/#home">
              <i className="fas fa-house-damage" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#about">
              <i className="far fa-address-card" />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#services">
              <i className="fas fa-concierge-bell" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#work">
              <i className="fas fa-briefcase" />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#blog">
              <i className="fas fa-blog" />
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/#contactus">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </header>
      <main className="main-left">
        <MarkdownViewer />
      </main>
      <Footer />
    </Fragment>
  );
};

export default BlogDisplayer;
