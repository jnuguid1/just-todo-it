const projectFactory = (name, description) => {
  const todoList = []; 

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

  const addTodo = (todo) => {
    todoList.push(todo);
  }

  const removeTodo = (todo) => {
    const index = todoList.indexOf(todo);
    if (index > -1) {
      todoList.splice(index, 1);
    }
  };

  return { 
    getName,
    getDescription,
    getTodoList,
    copyProject,
    editName,
    editDescription,
    addTodo,
    removeTodo
  };
};

export default projectFactory;