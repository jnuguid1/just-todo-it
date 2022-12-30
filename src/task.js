const taskFactory = (name) => {
  let isCompleted = false;
  
  const editName = () => {};
  const toggleComplete = () => {};
  const removeTask = () => {};

  return { name, isCompleted, editName, toggleComplete, removeTask};
};

export default taskFactory;