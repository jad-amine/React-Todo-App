import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DeleteButton from "./components/DeleteButton";
import UpdateTask from "./components/UpdateTask";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetchTasks();
      setTasks(res);
    };
    getTasks();
  }, []);

  // Function to get task from the fake api
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:8000/tasks");
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Function to send tasks to fake api
  const addTask = async (task) => {
    try {
      const res = await fetch("http://localhost:8000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      setTasks([...tasks, data]);
    } catch (err) {
      console.log(err);
    }
  };

  // Update task function
  const updateTask = async (id, task) => {
    const res = await fetch("http://localhost:8000/tasks/" + id, {
      method: "PUT",
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
  };

  // Delete task function
  const deleteTask = async (id) => {
    const res = await fetch("http://localhost:8000/tasks/" + id, {
      method: "DELETE",
    });
    if (res.status == 200) {
      alert("task deleted");
    } else {
      alert("Task not found");
    }
  };

  return (
    <div className="todo">
      <h2>Todo App</h2>
      <button onClick={() => setShowAddTask(!showAddTask)}>Add Task</button>
      {showAddTask && (
        <AddTask
          addTask={addTask}
          showAddTask={showAddTask}
          setShowAddTask={setShowAddTask}
        />
      )}
      <div className="tasks">
        {tasks &&
          tasks.map((task) => {
            return (
              <div key={task.id} className="task">
                <h4>{task.text}</h4>
                <p>{task.day}</p>
                <UpdateTask
                  task={task}
                  setTasks={setTasks}
                  updateTask={updateTask}
                  id={task.id}
                />
                <DeleteButton
                  deleteTask={deleteTask}
                  id={task.id}
                  setTasks={setTasks}
                  tasks={tasks}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
