import { useState } from "react";

const UpdateTask = ({ task, setTasks, updateTask}) => {
  const [newTask, setNewTask] = useState(task);
  const [text, setText] = useState("");

  return (
    <>
      <input
        type={"text"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setNewTask({ ...task, text: text });
        }}
      />
      <button onClick={() => updateTask(task.id, text)}>Update</button>
    </>
  );
};

export default UpdateTask;
