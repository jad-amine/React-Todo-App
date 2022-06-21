import { useState } from "react";

const UpdateTask = ({ task, updateTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type={"text"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => updateTask(task.id, text)}>Update</button>
    </>
  );
};

export default UpdateTask;
