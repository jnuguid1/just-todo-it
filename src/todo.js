const todoFactory = (id, title, description, dueDate, priority, notes) => {
  const checkList = [];
  let taskIdCounter = 0;
  let onTaskListChanged = () => {};
  let onTodoTitleChanged = () => {};
  let onTodoDescChanged = () => {};
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
    onTodoTitleChanged(id);
  };
  const editDescription = (newDesc) => {
    description = newDesc;
    onTodoDescChanged(id);
  };
  const editPriority = (newPriority) => {
    priority = newPriority;
  }
  const editDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const editNotes = (newNotes) => {
    notes = newNotes;
  };
  const addTask = (task) => {
    checkList.push(task);
    taskIdCounter += 1;
    onTaskListChanged(id);
  };
  const removeTask = (task) => {
    const index = checkList.indexOf(task);
    if (index > -1) {
      checkList.splice(index, 1);
    }
    onTaskListChanged();
  };
  const toggleMinimize = () => {
    isMinimized = !isMinimized;
    onTaskListChanged();
  };
  const checkIsMinimized = () => {
    return isMinimized;
  };

  const bindTodoCallback = (event, callback) => {
    switch (event) {
      case 'taskListChanged':
        onTaskListChanged = callback;
        break;
      case 'todoTitleChanged':
        onTodoTitleChanged = callback;
        break;
      case 'todoDescChanged':
        onTodoDescChanged = callback;
        break;
      case 'todoDueDateChanged':
        onTodoDueDateChanged = callback;
        break;
      case 'todoPriorityChanged':
        onTodoPriorityChanged = callback;
        break;
      case 'todoNotesChanged':
        onoTodoNotesChanged = callback;
        break;
      default:
        console.error('bindTodoCallback error');
    }
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
    editPriority,
    editNotes,
    addTask,
    removeTask,
    toggleMinimize,
    checkIsMinimized,
    bindTodoCallback,
  }
};

export default todoFactory;