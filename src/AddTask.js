import { useState } from "react";

const AddTask = ({ addNewTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          addNewTask(text);
        }}
      >
        Save
      </button>
    </>
  );
};

export default AddTask;
