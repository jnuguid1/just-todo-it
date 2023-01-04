const projectFactory = (name, description, id) => {
  const todoList = [];
  let onTodoListChanged = () => {};

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
  };

  const editDescription = (newDesc) => {
    description = newDesc;
  };

  const initialAddTodo = (todo) => {
    todoList.push(todo);
  };

  const addTodo = (todo) => {
    todoList.push(todo);
    onTodoListChanged();
  }

  const removeTodo = (todo) => {
    const index = todoList.indexOf(todo);
    if (index > -1) {
      todoList.splice(index, 1);
    }
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

  return { 
    getName,
    getDescription,
    getTodoList,
    copyProject,
    editName,
    editDescription,
    initialAddTodo,
    addTodo,
    removeTodo,
    getId,
    setId,
    bindOnTodoListChanged
  };
};

export default projectFactory;