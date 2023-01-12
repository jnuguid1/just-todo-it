const taskFactory = (name, id) => {
  let isCompleted = false;
  let onTaskNameChanged = () => {};

  const getId = () => {
    return id;
  };
  const setId = (newId) => {
    id = newId;
  };
  const getName = () => {
    return name;
  };
  const checkCompleted = () => {
    return isCompleted;
  };
  const editName = (newName) => {
    name = newName;
    onTaskNameChanged();
  };
  const toggleComplete = () => {
    isCompleted = !isCompleted;
    console.log({ id, isCompleted });
  };
  const bindOnTaskNameChanged = callback => {
    onTaskNameChanged = callback;
  }

  return { 
    getId, 
    setId, 
    getName, 
    checkCompleted, 
    editName, 
    toggleComplete,
    bindOnTaskNameChanged
  };
};

export default taskFactory;
