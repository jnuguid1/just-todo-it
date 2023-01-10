const projectFactory = (name, description, id) => {
  const todoList = [];
  let todoIdCounter = 0;
  let onTodoListChanged = () => {};
  let onNameChanged = () => {};
  let onDescChanged = () => {};

  const getTodoById = (id) => {
    return todoList.find(todo => todo.getId() === id);
  }
  const getTodoIdCounter = () => {
    return todoIdCounter;
  };
  const copyProject = () => {
    return projectFactory(name, description);
  };
  const getName = () => {
    return name;
  };
  const getDescription = () => {
    return description;
  };
  const getTodoList = () => {
    return todoList;
  };
  const editName = (newName) => {
    name = newName;
    onNameChanged();
  };
  const editDescription = (newDesc) => {
    description = newDesc;
    onDescChanged();
  };
  const addTodo = (todo) => {
    todoList.push(todo);
    todoIdCounter += 1;
    onTodoListChanged();
  }
  const removeTodo = (todo) => {
    const index = todoList.indexOf(todo);
    if (index > -1) {
      todoList.splice(index, 1);
    }
    onTodoListChanged();
  };
  const getId = () => {
    return id;
  }
  const setId = (newId) => {
    id = newId;
  }
  const bindOnTodoListChanged = (callback) => {
    onTodoListChanged = callback;
  };
  const bindOnNameChanged = (callback) => {
    onNameChanged = callback;
  }
  const bindOnDescChanged = (callback) => {
    onDescChanged = callback;
  }

  return { 
    getTodoById,
    getTodoIdCounter,
    getName,
    getDescription,
    getTodoList,
    copyProject,
    editName,
    editDescription,
    addTodo,
    removeTodo,
    getId,
    setId,
    bindOnTodoListChanged,
    bindOnNameChanged,
    bindOnDescChanged
  };
};

export default projectFactory;