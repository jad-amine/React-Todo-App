// Utilities
import { useEffect, useState } from "react";

// Components
import AddTask from "./components/AddTask";
import DeleteButton from "./components/DeleteButton";
import UpdateTask from "./components/UpdateTask";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // Fetch db tasks on page load
  useEffect(() => {
    const getTasks = async () => {
      const res = await fetchTasks();
      setTasks(res);
    };
    getTasks();
  }, []);

  // Function to get all the tasks from the fake api
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

  // Function to get sigle task from the fake api
  const fetchTask = async (id) => {
    try {
      const res = await fetch("http://localhost:8000/tasks/" + id);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Function to add task to fake api
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

  // Function to Update task 
  const updateTask = async (id, text) => {
    const task = await fetchTask(id);
    console.log(task);
    const newTask = { ...task, text: text };
    console.log(newTask);
    const res = await fetch("http://localhost:8000/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) => (task.id == id ? { ...task, text: data.text } : task))
    );
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
      <AddTask
        addTask={addTask}
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
      />
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
