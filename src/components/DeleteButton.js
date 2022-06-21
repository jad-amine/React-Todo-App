const DeleteButton = ({ deleteTask, id, setTasks, tasks }) => {
  return (
    <input
      type="button"
      onClick={() => {
        deleteTask(id);
        setTasks(tasks.filter((task) => task.id !== id));
      }}
      value={"Delete"}
    />
  );
};

export default DeleteButton;
