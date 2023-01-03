const view = (() => {
  const sidebar = document.querySelector('#sidebar');
  const projects = document.querySelector('#projects');
  const addProjectButton = document.querySelector('#add-project-btn');
  const projectContainer = document.querySelector('#project-container');
  const todoList = document.querySelector('#todo-list');
  const settings = document.querySelector('#settings');
  let showProjectFormEvent = () => {};

  const setProjectListItem = (project) => {
    const projectListItem = document.createElement('li');
    projectListItem.textContent = project;
    projects.insertBefore(projectListItem, addProjectButton);
  };

  const setProjectTitle = (title) => {
    const projectName = document.createElement('h2');
    projectName.classList.add('font-medium');
    projectName.classList.add('mb-16');
    projectName.textContent = title;
    projectContainer.insertBefore(projectName, todoList);
  };

  const setProjectDescription = (description) => {
    const projectDescription = document.createElement('p');
    projectDescription.classList.add('font-regular');
    projectDescription.classList.add('mb-48');
    projectDescription.textContent = description;
    projectContainer.insertBefore(projectDescription, todoList);
  };

  const setTodoTitle = (title, todoCard) => {
    const todoTitle = document.createElement('h2');
    todoTitle.classList.add('font-medium');
    todoTitle.classList.add('mb-32')
    todoTitle.textContent = title;
    todoCard.appendChild(todoTitle);
  };

  const setTodoStatus = (dueDate, priority, todoCard) => {
    const status = document.createElement('div');
    status.classList.add('mb-16');
    status.classList.add('status-container');
    const todoDueDate = document.createElement('p');
    todoDueDate.classList.add('font-small');
    todoDueDate.textContent = `Due: ${dueDate}`;
    status.appendChild(todoDueDate);
    const todoPriority = document.createElement('p');
    todoPriority.classList.add('font-small');
    todoPriority.textContent = priority;
    status.appendChild(todoPriority);
    todoCard.appendChild(status);
  };

  const setTodoDescription = (desc, todoCard) => {
    const todoDesc = document.createElement('p');
    todoDesc.classList.add('mb-32');
    todoDesc.textContent = desc;
    todoCard.appendChild(todoDesc);
  };

  const setTask = (task, container) => {
    const taskName = document.createElement('p');
    taskName.textContent = task;
    container.appendChild(taskName);
    return taskName;
  };

  const setTaskCheckCircle = (container, task) => {
    const checklistCircle = document.createElement('div');
    checklistCircle.classList.add('checklist-circle');
    container.insertBefore(checklistCircle, task);
    checklistCircle.addEventListener('click', () => {
      checklistCircle.classList.toggle('circle-filled');
      task.classList.toggle('task-done');
    });
  };

  const setTodoTasks = (tasks, todoCard) => {
    tasks.forEach(task => {
      const taskContainer = document.createElement('div');
      taskContainer.classList.add('task-container');
      const taskName = setTask(task, taskContainer);
      setTaskCheckCircle(taskContainer, taskName);
      todoCard.appendChild(taskContainer);
      const divider = document.createElement('div');
      const hr = document.createElement('hr');
      divider.appendChild(hr);
      divider.classList.add('checklist-divide');
      todoCard.appendChild(divider);
    })
  };

  const setAddTaskButton = (todoCard) => {
    const addTaskButton = document.createElement('div');
    addTaskButton.classList.add('add-task-button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.classList.add('p')
    todoCard.appendChild(addTaskButton);
    const taskFormContainer = document.createElement('div');
    taskFormContainer.classList.add('hidden');
    const taskForm = document.createElement('input');
    taskForm.placeholder = 'Enter task name';
    taskForm.classList.add('task-form');
    taskFormContainer.appendChild(taskForm);
    const taskSubmitButton = document.createElement('button');
    taskSubmitButton.textContent = 'SUBMIT';
    taskFormContainer.appendChild(taskSubmitButton);
    todoCard.appendChild(taskFormContainer);
    addTaskButton.addEventListener('click', () => {
      taskFormContainer.classList.toggle('hidden');
    });
  }

  const setNotes = (notes, todoCard) => {
    const notesHeading = document.createElement('h3');
    notesHeading.classList.add('notes-heading');
    notesHeading.textContent = 'Notes';
    todoCard.appendChild(notesHeading);
    const notesText = document.createElement('p');
    notesText.textContent = notes;
    todoCard.appendChild(notesText);
  };

  const addTodoCard = (todo) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    setTodoTitle(todo.title, todoCard);
    setTodoStatus(todo.due, todo.priority, todoCard);
    setTodoDescription(todo.desc, todoCard);
    setTodoTasks(todo.tasks, todoCard);
    setAddTaskButton(todoCard);
    setNotes(todo.notes, todoCard);

    todoList.appendChild(todoCard);
  };

  const setAddTodoButton = () => {
    const addTodoButton = document.createElement('div');
    addTodoButton.id = 'add-todo-button';
    addTodoButton.classList.add('add-todo-button');
    const addTodoButtonText = document.createElement('p');
    addTodoButtonText.classList.add('font-medium');
    addTodoButton.classList.add('grey-font')
    addTodoButtonText.textContent = 'Add Todo';
    addTodoButton.appendChild(addTodoButtonText);
    todoList.appendChild(addTodoButton);
  };

  const toggleProjectForm = () => {
    const projectFormContainer = document.querySelector('#project-form-container');
    if (projectFormContainer) {
      (projectFormContainer.style.display === 'none') ? 
        projectFormContainer.style.display = 'flex' :
        projectFormContainer.style.display = 'none';
    } else {
      const formContainer = document.createElement('div');
      formContainer.setAttribute('id', 'project-form-container');

      const nameForm = document.createElement('input');
      nameForm.setAttribute('type', 'text');
      nameForm.setAttribute('id', 'project-name-form');
      nameForm.setAttribute('placeholder', 'Enter the project name');
      const formSubmit = document.createElement('button');
      formSubmit.setAttribute('id', 'submit-project-button');
      formSubmit.textContent = 'ENTER';
      formContainer.appendChild(nameForm);
      formContainer.appendChild(formSubmit);

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