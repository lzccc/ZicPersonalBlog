import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["Anime Lover", "Developer", "Messi Fan"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
