const todoFactory = (title, description, dueDate, priority, notes) => {
  const checkList = [];

  const editTitle = () => {};
  const editDescription = () => {};
  const editDueDate = () => {};
  const editNotes = () => {};
  const addToChecklist = () => {};
  
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
    addToChecklist
  }
};

export default todoFactory;