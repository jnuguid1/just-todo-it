import user from "./user";

const viewController = (() => {
  const projects = document.querySelector('#projects');
  const addProjectButton = document.querySelector('#add-project-btn');
  const projectContainer = document.querySelector('#project-container');
  const todoList = document.querySelector('#todo-list');

  const initializeSidebarView = () => {
    user.getProjects().forEach(project => {
      const projectListItem = document.createElement('li');
      projectListItem.textContent = project.getName();
      projects.insertBefore(projectListItem, addProjectButton);
    });
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
    taskName.textContent = task.getName();
    container.appendChild(taskName);
  };

  const setTodoTasks = (tasks, todoCard) => {
    tasks.forEach(task => {
      const taskContainer = document.createElement('div');
      taskContainer.classList.add('task-container');
      const checklistCircle = document.createElement('div');
      checklistCircle.classList.add('checklist-circle');
      taskContainer.appendChild(checklistCircle);
      todoCard.appendChild(taskContainer);
      const divider = document.createElement('div');
      const hr = document.createElement('hr');
      divider.appendChild(hr);
      divider.classList.add('checklist-divide');
      todoCard.appendChild(divider);
      setTask(task, taskContainer);
    })
  };

  const setAddTaskButton = (todoCard) => {
    const addTaskButton = document.createElement('div');
    addTaskButton.classList.add('add-task-button');
    addTaskButton.textContent = 'Add Task';
    todoCard.appendChild(addTaskButton);
  }

  const setNotes = (notes, todoCard) => {
    const notesHeading = document.createElement('h3');
    notesHeading.textContent = 'Notes';
    todoCard.appendChild(notesHeading);
    const notesText = document.createElement('p');
    notesText.textContent = notes;
    todoCard.appendChild(notesText);
  };

  const addTodoCard = (todo) => {
    const todoCard = document.createElement('div');
    const tasks = todo.getCheckList();
    todoCard.classList.add('todo-card');
    setTodoTitle(todo.getTitle(), todoCard);
    setTodoStatus(todo.getDueDate(), todo.getPriority(), todoCard);
    setTodoDescription(todo.getDescription(), todoCard);
    setTodoTasks(tasks, todoCard);
    setAddTaskButton(todoCard);
    setNotes(todo.getNotes(), todoCard);

    todoList.appendChild(todoCard);
  };

  const setTodos = (list) => {
    list.forEach(todo => {
      addTodoCard(todo);
    });
  };

  const setAddTodoButton = () => {
    const addTodoButton = document.createElement('div');
    addTodoButton.classList.add('add-todo-button');
    const addTodoButtonText = document.createElement('p');
    addTodoButtonText.classList.add('font-medium');
    addTodoButton.classList.add('grey-font')
    addTodoButtonText.textContent = 'Add Section';
    addTodoButton.appendChild(addTodoButtonText);
    todoList.appendChild(addTodoButton);
  }

  const initializeProjectView = () => {
    if (user.getProjects().length !== 0) {
      const project = user.getProjects()[0];
      setProjectTitle(project.getName());
      setProjectDescription(project.getDescription());
      setTodos(project.getTodoList());
      setAddTodoButton();
    }
  };

  const initializeView = () => {
    initializeSidebarView();
    initializeProjectView();
  };

  initializeView();
})();

export default viewController;