import { useState } from "react";

const AddTask = ({ addTask, showAddTask, setShowAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();
    let task = { text, day, reminder };
    addTask(task);
  };

  return (
    <div className="addTask">
      <form onSubmit={sendData}>
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
      </form>
    </div>
  );
};

export default AddTask;
