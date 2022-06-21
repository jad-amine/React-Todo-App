import { useState } from "react";

const AddTask = ({ addTask, showAddTask, setShowAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  // Function to add task
  const sendData = async (e) => {
    e.preventDefault();
    let task = { text, day, reminder };
    addTask(task);
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="addTask">
      <button
        onClick={() => {
          setShowAddTask(!showAddTask);
        }}
      >
        {showAddTask && "Close"}
        {!showAddTask && "Add task"}
      </button>
      {showAddTask &&<form onSubmit={sendData}>
        <label>Task Name:</label>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
        <label>Task Day:</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
        />
        <label htmlFor="">Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={() => setReminder(!reminder)}
        />
        <input type="submit" value={"Post Task"} />
      </form>}
    </div>
  );
};

export default AddTask;
