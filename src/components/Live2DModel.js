import dynamic from "next/dynamic";

const ReactLive2d = dynamic(import("react-live2d"), {
  ssr: false,
});

const componentStyle = {
  position: "absolute",
  zIndex: 9999, // Make sure the zIndex is higher than other elements
};

export default function Home() {
  return (
    <div style={componentStyle}>
      <ReactLive2d
        width={250}
        height={350}
        bottom={"2px"}
        right={"-10px"}
        color="#fffdfc"
        ModelList={["Hiyori", "REM"]}
        TouchBody={["啊啊啊啊啊你要干嘛", "哼", "坏人"]}
        TouchDefault={["啊啊啊啊啊你要干嘛", "哼", "坏人"]}
        PathFull="/Resources/"
      />
    </div>
  );
}
