import helper from './view-helpers';

const view = (() => {
  let projectsList;
  let addProjectButton;
  let sidebar;
  let projectContainer;
  let todoList;
  let setProjectSwitchEvent = () => {};
  let addProjectEvent = () => {};
  let addTodoEvent = () => {};
  let addTaskEvent = () => {};
  let toggleTaskEvent = () => {};
  let deleteProjectEvent = () => {};
  let deleteTodoEvent = () => {};
  let deleteTaskEvent = () => {};
  let minimizeTodoEvent = () => {};
  let getCurrentProjectId = () => {};
  let editProjectNameEvent = () => {};
  let editProjectDescEvent = () => {};
  let editTodoTitleEvent  = () => {};
  let editTodoDueEvent = () => {};
  let editTodoPriorityEvent  = () => {};
  let editTodoDescriptionEvent = () => {};
  let editTodoNotesEvent = () => {};

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
    let element = projectsList.firstElementChild;
    while (element) {
      if (element.id === 'add-project-btn') {
        break;
      } else {
        projectsList.removeChild(element);
        element = projectsList.firstElementChild;
      } 
    }
  };

  const setProjectListItem = (project, projectId) => {
    const projectListContainer = helper.createDiv('project-list-container');
    const projectListItem = helper.createListItem(projectListContainer, project);
    projectListItem.setAttribute('project-id', projectId);
    const deleteProjectIcon = helper.createIcon(projectListContainer, 'fa-solid', 'fa-xmark', 'fa-lg', 'hidden');
    projectsList.insertBefore(projectListContainer, addProjectButton);
    projectListItem.addEventListener('click', () => {
      if (projectId !== getCurrentProjectId()) {
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

  const addInputEditListeners = (text, input, handler, id) => {
    text.addEventListener('click', () => {
      helper.toggleVisibility(text, input);
      input.focus();
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        if (input.value === '') {
          helper.toggleVisibility(text, input);
        } else {
          handler(input.value, id);
          helper.toggleVisibility(text, input);
          input.value = '';
        }
      } else if (event.key === 'Escape') {
        helper.toggleVisibility(text, input);
        input.value = '';
      }
    })
  }

  // Need to append a br element because title and description were made inline-block.
  // They are inline-block so that the element width doesn't inherit parent width.
  const setProjectName = (title) => {
    const projectName = helper.createText(projectContainer, 'h2', title, 'font-medium', 'mb-16', 'inline-block');
    const projectTitleEditInput = helper.createInputForm('project-title-edit-input', 'Enter a new project title', projectContainer, 'hidden', 'mb-16');
    projectName.id = 'project-title';
    projectContainer.appendChild(document.createElement('br'));
    addInputEditListeners(projectName, projectTitleEditInput, editProjectNameEvent);
  };

  const updateText = (elementId, text) => {
    const element = document.querySelector(elementId);
    element.textContent = text;
  }

  const setProjectDescription = (description) => {
    const projectDescription = helper.createText(projectContainer, 'p', description, 'font-regular', 'mb-48', 'inline-block');
    const projectDescEditInput = helper.createInputForm('project-desc-edit-input', 'Enter a new project description', projectContainer, 'hidden', 'mb-48');
    projectDescription.id = 'project-description';
    projectDescEditInput.size = '60';
    addInputEditListeners(projectDescription, projectDescEditInput, editProjectDescEvent);
  };

  const setTodoList = () => {
    todoList = helper.createIdDiv('todo-list');
    projectContainer.appendChild(todoList);
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
    const todoTitle = helper.createText(titleContainer, 'h2', title, 'font-medium');
    const todoTitleEditInput = helper.createInputForm('none', 'Enter a new title', titleContainer, 'hidden');
    todoTitleEditInput.classList.add('todo-title-edit-input');
    todoTitleEditInput.size = '10';
    addInputEditListeners(todoTitle, todoTitleEditInput, editTodoTitleEvent, todoId);

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
    helper.createText(status, 'p', `Due: ${dueDate}`, 'font-small');
    const priorityLabel = helper.createText(status, 'p', priority, 'font-small');
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
    helper.createText(todoCard, 'p', desc, 'mb-8');
  };

  const setTask = (task, container) => {
    const taskName = helper.createText(container, 'p', task);
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
    helper.createText(todoCard, 'h3', 'Notes', 'notes-heading');
    helper.createText(todoCard, 'p', notes);
  };

  const addTodoCard = (todo) => {
    const todoCardContainer = helper.createDiv();
    const todoCard = helper.createDiv('todo-card');
    const cardTopSection = helper.createDiv('card-top-section');
    const cardBottomSection = helper.createDiv('card-bottom-section');
    todoCard.id = `todo-${todo.todoId}`
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
          projectId: getCurrentProjectId(),
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

    addTodoButton.addEventListener('click', () => {
      todoFormContainer.style.display === 'flex' ?
        todoFormContainer.style.display = 'none' :
        todoFormContainer.style.display = 'flex';
    })
  };

  const setProjectForm = () => {
    const projectFormContainer = helper.createIdDiv('project-form-container', 'hidden');
    const nameForm = helper.createInputForm('project-name-form', 'Enter the project name', projectFormContainer);
    const formSubmit = helper.createButtonForm('button', 'submit-project-button', 'ENTER', projectFormContainer);
    projectsList.appendChild(projectFormContainer);

    const formEvent = () => {
      const projectName = nameForm.value;
      addProjectEvent(projectName);
      resetProjectSubmitForm();
    }
    formSubmit.addEventListener('click', formEvent);
    nameForm.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        formEvent();
      }
    })
    
    return projectFormContainer;
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
    projectFormContainer.classList.toggle('hidden');
    projectFormContainer.classList.toggle('flex');
  };

  const bindCallback = (event, callback) => {
    switch (event) {
      case 'getCurrentId':
        getCurrentProjectId = callback;
        break;
      case 'changeProject':
        setProjectSwitchEvent = callback;
        break;
      case 'addProject':
        addProjectEvent = callback;
        break;
      case 'addTodo':
        addTodoEvent = callback;
        break;
      case 'addTask':
        addTaskEvent = callback;
        break;
      case 'deleteProject':
        deleteProjectEvent = callback;
        break;
      case 'deleteTodo':
        deleteTodoEvent = callback;
        break;
      case 'deleteTask':
        deleteTaskEvent = callback;
        break;
      case 'minimizeTodo':
        minimizeTodoEvent = callback;
        break;
      case 'toggleTask':
        toggleTaskEvent = callback;
        break;
      case 'editProjectName':
        editProjectNameEvent = callback;
        break;
      case 'editProjectDesc':
        editProjectDescEvent = callback;
        break;
      case 'editTodoTitle':
        editTodoTitleEvent = callback;
        break;
      case 'editTodoDue':
        editTodoDueEvent = callback;
        break;
      case 'editTodoPriority':
        editTodoPriorityEvent = callback;
        break;
      case 'editTodoDesc':
        editTodoDescriptionEvent = callback;
        break;
      case 'editTodoNotes':
        editTodoNotesEvent = callback;
        break;
      default:
        console.error('callback bind error');
      
    }
  };

  const initializeView = () => {
    const container = document.querySelector('#container');
    sidebar = helper.createIdDiv('sidebar', 'primary-color', 'p-24');
    projectContainer = helper.createIdDiv('project-container', 'secondary-color', 'p-48');
    helper.createText(sidebar, 'h1', 'Just Todo It', 'font-large');
    helper.createText(sidebar, 'h2', 'Projects', 'font-medium', 'm-16');
    projectsList = helper.createList(sidebar, 'nav-list');
    projectsList.id = 'projects-list';
    addProjectButton = helper.createListItem(projectsList, 'Add Project', 'grey-font');
    addProjectButton.id = 'add-project-btn';
    const projectFormContainer = setProjectForm();
    container.appendChild(sidebar);
    container.appendChild(projectContainer);

    addProjectButton.addEventListener('click', () => {
      // The project form container starts with just the hidden class so
      // the event listener will turn off hidden and turn on flex and vice versa.
      projectFormContainer.classList.toggle('flex');
      projectFormContainer.classList.toggle('hidden');
    });
  }

  return { 
      initializeView,
      resetProjectView,
      resetProjectList,
      resetTodos,
      setTodoList,
      setProjectName,
      updateText,
      setProjectDescription,
      addTodoCard,
      setProjectListItem,
      setAddTodoButton,
      bindCallback
    }
})();

export default view;