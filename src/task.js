const taskFactory = (name) => {
  let isCompleted = false;

  const getName = () => {
    return name;
  };
  const checkCompleted = () => {
    return isCompleted;
  };
  const editName = (newName) => {
    name = newName;
  };
  const toggleComplete = () => {
    isCompleted = !isCompleted;
  };

  return { getName, checkCompleted, editName, toggleComplete};
};

export default taskFactory;