import helper from './view-helpers';

const view = (() => {
  let currentProjectId;
  const sidebar = document.querySelector('#sidebar');
  const projects = document.querySelector('#projects');
  const addProjectButton = document.querySelector('#add-project-btn');
  const projectContainer = document.querySelector('#project-container');
  let todoList = document.querySelector('#todo-list');
  const settings = document.querySelector('#settings');
  let showProjectFormEvent = () => {};
  let setTodoFormEvent = () => {};
  let setProjectSwitchEvent = () => {};
  let addTodoEvent = () => {};
  let addTaskEvent = () => {};
  let toggleTaskEvent = () => {};
  let deleteProjectEvent = () => {};
  let deleteTodoEvent = () => {};
  let deleteTaskEvent = () => {};
  let minimizeTodoEvent = () => {};

  const setCurrentProjectId = (id) => {
    currentProjectId = id;
  };

  const resetProjectView = () => {
    let element = projectContainer.lastElementChild;
    while (element) {
      projectContainer.removeChild(element);
      element = projectContainer.lastElementChild;
    }
    projectContainer.appendChild(helper.createIdDiv('todo-list'));
    todoList = document.querySelector('#todo-list');
  };

  const resetProjectList = () => {
    let element = projects.firstElementChild;
    while (element) {
      if (element.id === 'add-project-btn') {
        break;
      } else {
        projects.removeChild(element);
        element = projects.firstElementChild;
      } 
    }
  };

  const setProjectListItem = (project, projectId) => {
    const projectListContainer = helper.createDiv('project-list-container');
    const projectListItem = helper.createListItem(projectListContainer, project);
    projectListItem.setAttribute('project-id', projectId);
    const deleteProjectIcon = helper.createIcon(projectListContainer, 'fa-solid', 'fa-xmark', 'fa-lg', 'hidden');
    projects.insertBefore(projectListContainer, addProjectButton);
    projectListItem.addEventListener('click', () => {
      if (projectId !== currentProjectId) {
        setProjectSwitchEvent(projectId);
      }
    });
    projectListContainer.addEventListener('mouseenter', () => {
      deleteProjectIcon.classList.remove('hidden');
    });
    projectListContainer.addEventListener('mouseleave', () => {
      deleteProjectIcon.classList.add('hidden');
    });
    deleteProjectIcon.addEventListener('click', () => {
      deleteProjectEvent(projectId);
    });
  };

  const setProjectTitle = (title) => {
    helper.createText(projectContainer, 'before', 'h2', title, todoList, 'font-medium', 'mb-16');
  };

  const setProjectDescription = (description) => {
    helper.createText(projectContainer, 'before', 'p', description, todoList, 'font-regular', 'mb-48');
  };

  const resetTodos = () => {
    const todoListItems = todoList.children;
    const listLength = todoListItems.length-1;
    let i = 0;
    while (i < listLength) {
      todoList.removeChild(todoListItems[0]);
      i++;
    }
  };

  const setTodoTitle = (todoId, title, todoCard, cardSection) => {
    const titleContainer = helper.createDiv('title-container');
    helper.createText(titleContainer, 'after', 'h2', title, 'none', 'font-medium');
    const ellipsis = helper.createIcon(titleContainer, 'fa-solid', 'fa-ellipsis-vertical', 'fa-lg', 'ellipsis-container');
    const floatingSelection = createFloatingSelection(todoId, titleContainer, cardSection);
    floatingSelection.classList.add('hidden');
    todoCard.appendChild(titleContainer);

    ellipsis.addEventListener('click', () => {
      floatingSelection.classList.toggle('hidden');
    });
  };

  function createFloatingSelection(todoId, container, cardSection) {
    const selectionContainer = helper.createDiv('selection-container');
    const optionsList = helper.createList(selectionContainer, 'options-list');
    const minimizeCardOption = helper.createListItem(optionsList, 'Minimize Todo');
    const deleteTodoOption = helper.createListItem(optionsList, 'Delete Todo');
    container.appendChild(selectionContainer);
    (cardSection.classList.contains('hidden')) ?
        minimizeCardOption.textContent = 'Maximize Todo' :
        minimizeCardOption.textContent = 'Minimize Todo';
    minimizeCardOption.addEventListener('click', () => {
      minimizeTodoEvent(todoId);
    });
    deleteTodoOption.addEventListener('click', () => {
      deleteTodoEvent(todoId);
    });

    return selectionContainer;
  };

  const setTodoStatus = (dueDate, priority, todoCard) => {
    const status = helper.createDiv('mb-16', 'status-container')
    helper.createText(status, 'after', 'p', `Due: ${dueDate}`, 'none', 'font-small');
    const priorityLabel = helper.createText(status, 'after', 'p', priority, 'none', 'font-small');
    if (priority.toLowerCase() === 'urgent') {
      priorityLabel.classList.add('priority-label-urgent');
    } else if (priority.toLowerCase() === 'normal') {
      priorityLabel.classList.add('priority-label-normal');
    } else if (priority.toLowerCase() === 'unimportant') {
      priorityLabel.classList.add('priority-label-unimportant');
    }
    todoCard.appendChild(status);
  };

  const setTodoDescription = (desc, todoCard) => {
    helper.createText(todoCard, 'after', 'p', desc, 'none', 'mb-8');
  };

  const setTask = (task, container) => {
    const taskName = helper.createText(container, 'after', 'p', task);
    return taskName;
  };

  const setTaskCheckCircle = (todoId, container, taskElement, taskObj) => {
    const checklistCircle = helper.createDiv('checklist-circle');
    if (taskObj.isCompleted) {
      checklistCircle.classList.add('circle-filled');
    } else {
      checklistCircle.classList.remove('circle-filled');
    }
    container.insertBefore(checklistCircle, taskElement);
    checklistCircle.addEventListener('click', () => {
      checklistCircle.classList.toggle('circle-filled');
      taskElement.classList.toggle('task-done');
      toggleTaskEvent(todoId, taskObj.id);
    });
  };

  const setTodoTasks = (todoId, tasks, todoCard) => {
    tasks.forEach(task => {
      const taskContainer = helper.createDiv('task-container');
      const taskNameCircleContainer = helper.createDiv('task-name-circle-container');
      const taskElement = setTask(task.name, taskNameCircleContainer);
      if (task.isCompleted) {
        taskElement.classList.add('task-done');
      } else {
        taskElement.classList.remove('task-done');
      }
      setTaskCheckCircle(todoId, taskNameCircleContainer, taskElement, task);
      taskContainer.appendChild(taskNameCircleContainer);
      const deleteProjectIcon = helper.createIcon(taskContainer, 'fa-solid', 'fa-xmark', 'fa-lg', 'hidden');
      todoCard.appendChild(taskContainer);
      const divider = helper.createDiv('checklist-divide');
      const hr = document.createElement('hr');
      divider.appendChild(hr);
      todoCard.appendChild(divider);
      taskContainer.addEventListener('mouseenter', () => {
        deleteProjectIcon.classList.remove('hidden');
      });
      taskContainer.addEventListener('mouseleave', () => {
        deleteProjectIcon.classList.add('hidden');
      });
      deleteProjectIcon.addEventListener('click', () => {
        deleteTaskEvent(todoId, task.id);
      });
    })
  };

  const setAddTaskButton = (projectId, todoId, todoCard) => {
    const addTaskButton = helper.createButtonForm('div', 'none', 'Add Task', todoCard, 'p', 'add-task-button');
    const taskFormContainer = helper.createDiv('hidden');
    const taskForm = helper.createInputForm('none', 'Enter task name', taskFormContainer, 'task-form');
    const taskSubmitButton = helper.createButtonForm('button', 'none', 'Submit', taskFormContainer, 'submit-task-btn');
    todoCard.appendChild(taskFormContainer);
    addTaskButton.addEventListener('click', () => {
      taskFormContainer.classList.toggle('hidden');
    });
    const formEvent = () => {
      const taskName = taskForm.value;
      addTaskEvent(projectId, todoId, taskName);
    }
    taskSubmitButton.addEventListener('click', formEvent);
    taskForm.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        formEvent();
      }
    })
  }

  const setNotes = (notes, todoCard) => {
    helper.createText(todoCard, 'after', 'h3', 'Notes', 'none', 'notes-heading');
    helper.createText(todoCard, 'after', 'p', notes);
  };

  const addTodoCard = (todo) => {
    const todoCardContainer = helper.createDiv();
    const todoCard = helper.createDiv('todo-card');
    const cardTopSection = helper.createDiv('card-top-section');
    const cardBottomSection = helper.createDiv('card-bottom-section');
    if (todo.isMinimized === true) {
      cardBottomSection.classList.add('hidden');
    }
    setTodoTitle(todo.todoId, todo.title, cardTopSection, cardBottomSection);
    setTodoStatus(todo.due, todo.priority,cardTopSection);
    setTodoDescription(todo.desc, cardTopSection);
    setTodoTasks(todo.todoId, todo.tasks, cardBottomSection);
    setAddTaskButton(todo.projectId, todo.todoId, cardBottomSection);
    setNotes(todo.notes, cardBottomSection);
    todoCard.appendChild(cardTopSection);
    todoCard.appendChild(cardBottomSection);

    const addTodoButton = document.querySelector('#todo-add-container');
    todoCardContainer.appendChild(todoCard);
    todoList.insertBefore(todoCardContainer, addTodoButton);
  };

  const setTodoForm = (container) => {
    const form = document.createElement('form');
    form.noValidate = true;
    
    helper.createFormLabel('datetime-label', 'Due Date', form);
    helper.createDateTimeInput('due-date-input', form);
    const todoTitle = helper.createInputForm('todo-title', 'Title', form);
    const titleError = document.createElement('span');
    titleError.classList.add('error');
    form.appendChild(titleError);
    helper.createSelectForm('priority-select', form, 'Priority', 'Urgent', 'Normal', 'Unimportant')
    const todoDescription = helper.createTextAreaForm('description-textarea', 'Description', form);
    const todoNotes = helper.createTextAreaForm('notes-input', 'Notes', form);
     helper.createButtonForm('button', 'todo-submit-btn', 'SUBMIT', form);
    todoTitle.required = true;

    todoTitle.addEventListener('input', () => {
      if (todoTitle.validity.valid) {
        titleError.textContent = '';
        titleError.className = 'error';
      }
    })
    const formEvent = () => {
      if (!todoTitle.validity.valid) {
        showError();
      } else {
        let desc;
        let notes;
        if (document.querySelector('#description-textarea').value === '') {
          desc = 'This is a todo. Add checklist tasks, a due date, and priorities here';
        } else {
          desc = document.querySelector('#description-textarea').value;
        }
        if (document.querySelector(('#notes-input')).value === '') {
          notes = 'Add notes and any additional thoughts here';
        } else {
          notes = document.querySelector(('#notes-input')).value;
        }
        const todo = {
          projectId: currentProjectId,
          title: document.querySelector('#todo-title').value,
          due: document.querySelector('#due-date-input').value.replace('T', ' '),
          priority: document.querySelector('#priority-select').value,
          desc: desc,
          notes: notes
        };
        addTodoEvent(todo);
        resetTodoSubmitForm();
      };
    }

  form.addEventListener('submit', (event) => {
    formEvent();
    event.preventDefault();
  }
  );
  todoTitle.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      formEvent();
    }
  });
  todoDescription.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      formEvent();
    }
  });
  todoNotes.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      formEvent();
    }
  });
  container.appendChild(form);

  function showError() {
    if (todoTitle.validity.valueMissing) {
      titleError.textContent = 'You need to enter a title.';
    }
  }
  };

  const setAddTodoButton = () => {
    const addTodoContainer = helper.createIdDiv('todo-add-container');
    const todoFormContainer = helper.createIdDiv('todo-form-container', 'hidden');
    const addTodoButton = helper.createButtonForm('div', 'add-todo-button', 'Add Todo', addTodoContainer, 'add-todo-button', 'grey-font', 'font-medium');
    setTodoForm(todoFormContainer);
    addTodoContainer.appendChild(todoFormContainer);
    todoList.appendChild(addTodoContainer);
    setTodoFormEvent();

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
      const formContainer = helper.createIdDiv('project-form-container');
      const nameForm = helper.createInputForm('project-name-form', 'Enter the project name', formContainer);
      const formSubmit = helper.createButtonForm('button', 'submit-project-button', 'ENTER', formContainer);
      sidebar.insertBefore(formContainer, settings);
      showProjectFormEvent();
    }
  };

  const resetTodoSubmitForm = () => {
    document.querySelector('#todo-title').value = '';
    document.querySelector('#due-date-input').value = '';
    document.querySelector('#priority-select').value = '';
    document.querySelector('#description-textarea').value = '';
    document.querySelector('#notes-input').value = '';
    document.querySelector('#todo-form-container').style.display = 'none';
  };

  const resetProjectSubmitForm = () => {
    const projectNameForm = document.querySelector('#project-name-form');
    projectNameForm.value = '';
    const projectFormContainer = document.querySelector('#project-form-container');
    projectFormContainer.style.display = 'none';
  };

  const bindChangeProject = (callback) => {
    setProjectSwitchEvent = callback;
  };

  const bindAddTask = (callback) => {
    addTaskEvent = callback;
  };

  const bindSubmitTodo = (callback) => {
    addTodoEvent = callback;
  };

  const bindAddTodo = (callback) => {
    setTodoFormEvent = callback;
  }

  const bindAddProject = (callback) => {
    showProjectFormEvent = callback;
  };

  const bindSubmitProject = (handler) => {
    const submitButton = document.querySelector('#submit-project-button');
    const projectNameForm = document.querySelector('#project-name-form');
    const formEvent = () => {
      const projectName = projectNameForm.value;
      handler(projectName);
      resetProjectSubmitForm();
    }
    submitButton.addEventListener('click', formEvent);
    projectNameForm.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        formEvent();
      }
    })
  };

  const bindToggleTask = (callback) => {
    toggleTaskEvent = callback;
  };

  const bindDeleteProject = (callback) => {
    deleteProjectEvent = callback;
  };

  const bindDeleteTask = (callback) => {
    deleteTaskEvent = callback;
  };

  const bindDeleteTodo = (callback) => {
    deleteTodoEvent = callback;
  }

  const bindMinimizeTodo = (callback) => {
    minimizeTodoEvent = callback;
  }

  addProjectButton.addEventListener('click', toggleProjectForm);

  return { 
      resetProjectView,
      resetProjectList,
      resetTodos,
      setCurrentProjectId,
      setProjectTitle,
      setProjectDescription,
      addTodoCard,
      setProjectListItem,
      setAddTodoButton,
      bindSubmitProject,
      bindAddProject,
      toggleProjectForm,
      bindAddTodo,
      bindAddTask,
      bindSubmitTodo,
      bindChangeProject,
      bindToggleTask,
      bindDeleteProject,
      bindDeleteTodo,
      bindDeleteTask,
      bindMinimizeTodo
    }
})();

export default view;