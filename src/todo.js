const todoFactory = (id, title, description, dueDate, priority, notes) => {
  const checkList = [];
  let onTaskListChange = () => {};

  const getId = () => {
    return id;
  }
  const setId = (newId) => {
    id = newId;
  }
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
    onTaskListChange(id);
  };
  const removeTask = (task) => {
    const index = checkList.indexOf(task);
    if (index > -1) {
      checkList.splice(index, 1);
    }
  };

  const bindOnTaskListChange = (callback) => {
    onTaskListChange = callback;
  }
  
  return {
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
    bindOnTaskListChange
  }
};

export default todoFactory;