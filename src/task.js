const taskFactory = (name) => {
  let isCompleted = false;
  
  const editName = (newName) => {
    name = newName;
  };
  const toggleComplete = () => {
    isCompleted = !isCompleted;
  };

  return { name, isCompleted, editName, toggleComplete};
};

export default taskFactory;