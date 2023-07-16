import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ConfirmDialog } from "@/src/components/Dialog";
import { Reorder, useMotionValue } from "framer-motion";
import strings from "@/src/utils/globalString";

const blogListLink = strings.serverURL + "/api/bloglist?listid=blogSet:user1";

const SingleBlog = ({ item, handleDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const variantsItem = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const y = useMotionValue(0);
  return (
    <motion.div
      className="col-lg-4 m-15px-tb"
      variants={variantsItem}
      key={item.blogId}
    >
      <Reorder.Item style={{ y }} as="div">
        <div
          className="blog-grid blog-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="blog-gird-info">
            {isHovered && (
              <IconButton
                aria-label="close"
                onClick={() => handleDelete(item.blogId)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
            <div className="b-meta">
              <span className="date">{item.date}</span>

              {item.meta.split(" ").map((segment, index) => (
                <span ley={index} className="meta">
                  {segment}
                </span>
              ))}
            </div>
            <h5>
              <a href="#">{item.link}</a>
            </h5>
            <p>{item.text}</p>
            <div className="btn-grid">
              <Link legacyBehavior href={`/blogDisplayer?id=${item.blogId}`}>
                <a className="m-btn-link">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </Reorder.Item>
    </motion.div>
  );
};

export const LastestBlog = ({ num }) => {
  let [data, setData] = useState(null);
  let [deleteId, setDeleteId] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDelete = (id) => {
    setConfirmOpen(true);
    console.log("deletedId: " + id);
    setDeleteId(id);
  };

  useEffect(() => {
    // Make an API request or perform any asynchronous operation
    fetchData()
      .then((response) => {
        if (num > 0) {
          setData(response.slice(0, num));
        } else {
          setData(response);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(blogListLink);
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Reorder.Group axis="y" onReorder={setData} values={data} as="div">
        <div className="row">
          {data.map((item) => (
            <SingleBlog item={item} handleDelete={handleDelete}></SingleBlog>
          ))}

          <ConfirmDialog
            open={confirmOpen}
            setOpen={setConfirmOpen}
            toDelete={deleteId}
            setDataAfterDelete={setData}
            currentData={data}
          />
        </div>
      </Reorder.Group>
    </motion.div>
  );
};
const Blog = () => {
  const linkStyle = {
    position: "absolute",
    top: "50px",
    right: "50px",
    /* Other link styles */
  };
  const linkContainer = {
    position: "relative",
    /* Other container styles */

    /* Adjust container size as needed */
    width: "100%",
    height: "100%",
  };
  return (
    <section id="blog" className="section white-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Latest Blogs</h3>
              <p className="text-uppercase small">
                A BACKEND DEVELOPER IN SHENZHEN
              </p>
            </div>
          </div>
        </div>
        <LastestBlog num={3} />
      </div>
      <div style={linkContainer}>
        <Link legacyBehavior href="/allBlogs">
          <a className="m-btn-link" style={linkStyle}>
            More &gt;&gt;&gt;{" "}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
