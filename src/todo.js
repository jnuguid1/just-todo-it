const todoFactory = (title, description, dueDate, priority, notes) => {
  const checkList = [];

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
  };
  const removeTask = (task) => {
    const index = checkList.indexOf(task);
    if (index > -1) {
      checkList.splice(index, 1);
    }
  };
  
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checkList,
    editTitle,
    editDescription,
    editDueDate,
    editNotes,
    addTask,
    removeTask
  }
};

export default todoFactory;