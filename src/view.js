const view = (() => {
  const sidebar = document.querySelector('#sidebar');
  const projects = document.querySelector('#projects');
  const addProjectButton = document.querySelector('#add-project-btn');
  const projectContainer = document.querySelector('#project-container');
  const todoList = document.querySelector('#todo-list');
  const settings = document.querySelector('#settings');
  let showProjectFormEvent = () => {};

  function createDiv() {
    const div = document.createElement('div');
    for (let i = 0; i < arguments.length; i++) {
      div.classList.add(`${arguments[i]}`);
    }
    return div;
  };

  function createIdDiv(id) {
    const div = document.createElement('div');
    div.id = id;
    for (let i = 1; i < arguments.length; i++) {
      div.classList.add(`${arguments[i]}`);
    }
    return div;
  };
  
  const createInputForm = (id, placeholder, container) => {
    const input = document.createElement('input');
    if (id !== 'none') {
      input.id = id;
    }
    input.placeholder = placeholder;
    container.appendChild(input);
    return input;
  };

  const createTextAreaForm = (id, placeholder, container) => {
    const input = document.createElement('textarea');
    input.id = id;
    input.placeholder = placeholder;
    container.appendChild(input);
    return input;
  };

  function createButtonForm(element, id, text, container) {
    let btn;
    if (element === 'div') {
      btn = document.createElement('div');
    } else if (element === 'button') {
      btn = document.createElement('button');
    }
    btn.id = id;
    btn.textContent = text;
    for (let i = 4; i < arguments.length; i++) {
      btn.classList.add(`${arguments[i]}`);
    }
    container.appendChild(btn);
    return btn;
  };

  /**
   * If insertPosition is 'before', argument[4] should be the
   * node to insert before.
   * If insertPosition is 'after' and there are classes to add,
   * argument[4] should be filled with any value.
   */
  function createText(container, insertPosition, element, text) {
    const textElement = document.createElement(`${element}`);
    textElement.textContent = text;
    for (let i = 5; i < arguments.length; i++) {
      textElement.classList.add(`${arguments[i]}`);
    }
    if (insertPosition === 'before') {
      container.insertBefore(textElement, arguments[4]);
    } else {
      container.appendChild(textElement);
    }
    return textElement;
  }

  const setProjectListItem = (project) => {
    const projectListItem = document.createElement('li');
    projectListItem.textContent = project;
    projects.insertBefore(projectListItem, addProjectButton);
  };

  const setProjectTitle = (title) => {
    createText(projectContainer, 'before', 'h2', title, todoList, 'font-medium', 'mb-16');
  };

  const setProjectDescription = (description) => {
    createText(projectContainer, 'before', 'h2', description, todoList, 'font-regular', 'mb-48');
  };

  const setTodoTitle = (title, todoCard) => {
    createText(todoCard, 'after', 'h2', title, 'none', 'font-medium', 'mb-32');
  };

  const setTodoStatus = (dueDate, priority, todoCard) => {
    const status = createDiv('mb-16', 'status-container')
    createText(status, 'after', 'p', `Due: ${dueDate}`, 'none', 'font-small');
    createText(status, 'after', 'p', priority, 'none', 'font-small');
    todoCard.appendChild(status);
  };

  const setTodoDescription = (desc, todoCard) => {
    createText(todoCard, 'after', 'p', desc, 'none', 'mb-32');
  };

  const setTask = (task, container) => {
    const taskName = createText(container, 'after', 'p', task);
    return taskName;
  };

  const setTaskCheckCircle = (container, task) => {
    const checklistCircle = createDiv('checklist-circle');
    container.insertBefore(checklistCircle, task);
    checklistCircle.addEventListener('click', () => {
      checklistCircle.classList.toggle('circle-filled');
      task.classList.toggle('task-done');
    });
  };

  const setTodoTasks = (tasks, todoCard) => {
    tasks.forEach(task => {
      const taskContainer = createDiv('task-container')
      const taskName = setTask(task, taskContainer);
      setTaskCheckCircle(taskContainer, taskName);
      todoCard.appendChild(taskContainer);
      const divider = createDiv('checklist-divide');
      const hr = document.createElement('hr');
      divider.appendChild(hr);
      todoCard.appendChild(divider);
    })
  };

  const setAddTaskButton = (todoCard) => {
    const addTaskButton = createButtonForm('div', 'none', 'Add Task', todoCard, 'p', 'add-task-button');
    const taskFormContainer = createDiv('hidden');
    const taskForm = createInputForm('none', 'Enter task name', taskFormContainer);
    const taskSubmitButton = createButtonForm('button', 'none', 'SUBMIT', taskFormContainer);
    todoCard.appendChild(taskFormContainer);
    addTaskButton.addEventListener('click', () => {
      taskFormContainer.classList.toggle('hidden');
    });
  }

  const setNotes = (notes, todoCard) => {
    createText(todoCard, 'after', 'h3', 'Notes', 'none', 'notes-heading');
    createText(todoCard, 'after', 'p', notes);
  };

  const addTodoCard = (todo) => {
    const todoCard = createDiv('todo-card');
    setTodoTitle(todo.title, todoCard);
    setTodoStatus(todo.due, todo.priority, todoCard);
    setTodoDescription(todo.desc, todoCard);
    setTodoTasks(todo.tasks, todoCard);
    setAddTaskButton(todoCard);
    setNotes(todo.notes, todoCard);

    todoList.appendChild(todoCard);
  };

  const setTodoForm = (container) => {
    createInputForm('todo-title', 'Title', container);
    createInputForm('due-date-input', 'Due Date', container);
    createInputForm('priority-input', 'Priority', container);
    createTextAreaForm('description-textarea', 'Description', container);
    createTextAreaForm('notes-input', 'Notes', container);
    createButtonForm('button', 'todo-submit-btn', 'SUBMIT', container);
  };

  const setAddTodoButton = () => {
    const addTodoContainer = createDiv();
    const todoFormContainer = createIdDiv('todo-form-container', 'hidden');
    const addTodoButton = createButtonForm('div', 'add-todo-button', 'Add Todo', addTodoContainer, 'add-todo-button', 'grey-font', 'font-medium');
    setTodoForm(todoFormContainer);
    addTodoContainer.appendChild(todoFormContainer);
    todoList.appendChild(addTodoContainer);

    addTodoButton.addEventListener('click', () => {
      todoFormContainer.style.display === 'flex' ?
        todoFormContainer.style.display = 'none' :
        todoFormContainer.style.display = 'flex';
    })
  };

  const toggleProjectForm = () => {
    const projectFormContainer = document.querySelector('#project-form-container');
    if (projectFormContainer) {
      (projectFormContainer.style.display === 'none') ? 
        projectFormContainer.style.display = 'flex' :
        projectFormContainer.style.display = 'none';
    } else {
      const formContainer = createIdDiv('project-form-container');
      const nameForm = createInputForm('project-name-form', 'Enter the project name', formContainer);
      const formSubmit = createButtonForm('button', 'submit-project-button', 'ENTER', formContainer);
      sidebar.insertBefore(formContainer, settings);
      showProjectFormEvent();
    }
  };

  addProjectButton.addEventListener('click', toggleProjectForm);

  const resetProjectSubmitForm = () => {
    const projectNameForm = document.querySelector('#project-name-form');
    projectNameForm.input = '';
    const projectFormContainer = document.querySelector('#project-form-container');
    projectFormContainer.style.display = 'none';
  };

  const bindAddProject = (callback) => {
    showProjectFormEvent = callback;
  }

  const bindSubmitProject = (handler) => {
    const submitButton = document.querySelector('#submit-project-button');
    submitButton.addEventListener('click', () => {
      const projectNameForm = document.querySelector('#project-name-form');
      const projectName = projectNameForm.value;
      handler(projectName);
      resetProjectSubmitForm();
    });
  };

  return { 
      setProjectTitle,
      setProjectDescription,
      addTodoCard,
      setProjectListItem,
      setAddTodoButton,
      bindSubmitProject,
      bindAddProject,
      toggleProjectForm
    }
})();

export default view;