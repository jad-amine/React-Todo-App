import { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetchTasks();
      setTasks(res);
    };
    getTasks();
  }, []);

  //
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

  return (
    <div className="todo">
      <h2>Todo App</h2>
      <div className="tasks">
        {tasks &&
          tasks.map((task) => {
            return (
              <div key={task.id} className="task">
                <h4>{task.text}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
