import React, { useEffect, useState } from "react";
import ImgMediaCard from "@/src/components/ImgMediaCard";
import { Reorder, useMotionValue } from "framer-motion";
import strings from "@/src/utils/globalString";

const commentRecords =
  strings.serverURL + "/api/comments?listid=commentSet:user1";
function ScrollableComponent({ cardsData, setCardsData }) {
  const y = useMotionValue(0);
  return (
    <Reorder.Group
      axis="y"
      onReorder={setCardsData}
      values={cardsData}
      as="div"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          maxHeight: 450,
        }}
      >
        {cardsData.map((card) => (
          <Reorder.Item style={{ y }} as="div">
            <ImgMediaCard
              key={card.commentId}
              cardID={card.commentId}
              content={card.content}
              date={card.date}
              setCardsData={setCardsData}
              cardData={cardsData}
            />
          </Reorder.Item>
        ))}
      </div>
    </Reorder.Group>
  );
}

const PersonalZone = () => {
  const id = "user1";
  let [content, setContentData] = useState("");
  let [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    fetchData()
      .then((response) => {
        if (response) {
          setCardsData(response);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(commentRecords);
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };
  const handleChange = (event) => {
    setContentData(event.target.value);
  };
  const handleClick = async () => {
    if (content.length == 0) {
      console.log("please type something!");
      return;
    }
    try {
      const response = await fetch(strings.serverURL + `/api/comment/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      setContentData("");
      if (response.ok) {
        console.log("Content saved successfully!");
      } else {
        console.error("An error occurred while saving the content.");
      }
      const newData = await response.json();
      setCardsData((cardsData) => [newData, ...cardsData]);
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving the content.");
    }
  };
  return (
    <section className="section gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="row sm-m-25px-b m-35px-b">
              <div className="col-md-12">
                <div className="section-title">
                  <h3 className="dark-color text-uppercase">Personal Zone</h3>
                  <p className="text-uppercase small">Some Random Thoughts</p>
                </div>
              </div>
            </div>
            <div className="contact-form box-shadow">
              <h4 className="dark-color font-alt m-20px-b">Say Something</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      style={{ width: "90%" }}
                      onChange={handleChange}
                      value={content}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="m-btn m-btn-theme" onClick={handleClick}>
                    {" "}
                    send message
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-lg-6 m-15px-tb">
            <ScrollableComponent
              cardsData={cardsData}
              setCardsData={setCardsData}
            ></ScrollableComponent>
          </div>
        </div>

        {/* testimonials */}

        {/* / */}
        <div className="owl-dots"></div>
      </div>
    </section>
  );
};
export default PersonalZone;
