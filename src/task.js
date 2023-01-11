const taskFactory = (name, id) => {
  let isCompleted = false;

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
  };
  const toggleComplete = () => {
    isCompleted = !isCompleted;
    console.log({ id, isCompleted });
  };

  return { getId, setId, getName, checkCompleted, editName, toggleComplete };
};

export default taskFactory;
