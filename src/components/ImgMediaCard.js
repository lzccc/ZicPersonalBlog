import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import strings from "@/src/utils/globalString";

const SingleCard = ({ cardID, content, date, setCardsData, cardData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleDelete = () => {
    setCardsData(cardData.filter((item) => item.commentId !== cardID));
    fetch(strings.serverURL + `/api/comment/${cardID}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          return;
        }
      })
      .catch((error) => console.log("Error:", error));
  };
  return (
    <React.Fragment>
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="comment">
          <Typography variant="body2">{date}</Typography>
          <Typography variant="h6" component="div">
            {content}
          </Typography>
          {isHovered && (
            <IconButton
              style={{ position: "absolute", right: "0", top: "0" }}
              aria-label="close"
              size="small"
              onClick={handleDelete}
            >
              <DeleteOutlineIcon />
            </IconButton>
          )}
        </CardContent>
      </div>
    </React.Fragment>
  );
};

export default function OutlinedCard({
  cardID,
  content,
  date,
  setCardsData,
  cardData,
}) {
  return (
    <div>
      <Box sx={{ minWidth: 275, padding: 1 }} className="comment-card">
        <Card variant="outlined">
          <SingleCard
            cardID={cardID}
            content={content}
            date={date}
            setCardsData={setCardsData}
            cardData={cardData}
          />
        </Card>
      </Box>
    </div>
  );
}
