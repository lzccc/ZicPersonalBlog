import dynamic from "next/dynamic";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const NewMarkDownEditor = ({ content, updateSource, saveContent }) => {
  const [text, setText] = useState(content);

  const handleTextChange = (event) => {
    updateSource(event);
    setText(event);
  };
  return (
    <div style={{ padding: 25 }}>
      <MDEditor
        height={1000}
        visibleDragbar={false}
        value={text}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default NewMarkDownEditor;
