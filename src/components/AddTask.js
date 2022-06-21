import { useState } from "react";

const AddTask = ({ AddTask, showAddTask, setShowAddTask }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");

  return (
    <div className="addTask">
      <form onSubmit={sendData}>
        <label>Task Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label>Task Day:</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default AddTask;
