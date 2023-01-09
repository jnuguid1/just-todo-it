const todoFactory = (id, title, description, dueDate, priority, notes) => {
  const checkList = [];
  let taskIdCounter = 0;
  let onTaskListChange = () => {};
  let onTodoChange = () => {};
  let isMinimized = false;

  const getTaskById = (id) => {
    return checkList.find(task => task.getId() === id);
  }
  const getTaskIdCounter = () => {
    return taskIdCounter;
  };
  const getId = () => {
    return id;
  };
  const setId = (newId) => {
    id = newId;
  };
  const getTitle = () => {
    return title;
  };
  const getDescription = () => {
    return description;
  };
  const getDueDate = () => {
    return dueDate;
  };
  const getPriority = () => {
    return priority;
  };
  const getNotes = () => {
    return notes;
  };
  const getCheckList = () => {
    return checkList;
  }
  const editTitle = (newTitle) => {
    title = newTitle;
  };
  const editDescription = (newDesc) => {
    description = newDesc;
  };
  const editDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const editNotes = (newNotes) => {
    notes = newNotes;
  };
  const addTask = (task) => {
    checkList.push(task);
    taskIdCounter += 1;
    onTaskListChange(id);
  };
  const removeTask = (task) => {
    const index = checkList.indexOf(task);
    if (index > -1) {
      checkList.splice(index, 1);
    }
    onTaskListChange();
  };
  const toggleMinimize = () => {
    isMinimized = !isMinimized;
    onTaskListChange();
  };
  const checkIsMinimized = () => {
    return isMinimized;
  };

  const bindOnTaskListChange = (callback) => {
    onTaskListChange = callback;
  };

  const bindOnTodoChange = (callback) => {
    onTodoChange = callback;
  }
  
  return {
    getTaskById,
    getTaskIdCounter,
    getId,
    setId,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNotes,
    getCheckList,
    editTitle,
    editDescription,
    editDueDate,
    editNotes,
    addTask,
    removeTask,
    bindOnTaskListChange,
    bindOnTodoChange,
    toggleMinimize,
    checkIsMinimized,
  }
};

export default todoFactory;