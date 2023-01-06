import user from "./user";
import projectFactory from './project'
import todoFactory from "./todo";
import taskFactory from "./task";
import view from './view';

const controller = (() => {
  let currentProjectId = user.getProjectIdCounter();

  const initializeUser = () => {
    const projectName = 'Your Project';
    const projectDesc = 'This is your project. This text blurb is your project description, put anything here.';
    const projectId = user.getProjectIdCounter();
    currentProjectId = user.getProjectIdCounter();
    user.incrementProjectIdCounter();
    const firstProject = projectFactory(projectName, projectDesc, projectId);
    firstProject.bindOnTodoListChanged(onTodoListChanged);
    const todoId = firstProject.getTodoIdCounter();
    firstProject.incrementTodoIdCounter();
    const todoTitle = 'To do';
    const todoDesc = 'This is a todo. Add checklist tasks, due dates, and priorities here.';
    const dueDate = 'Tues, 10: 30 am';
    const priority = 'Urgent';
    const notes = 'Add notes and any additional thoughts here';
    const firstTodo = todoFactory(todoId, todoTitle, todoDesc, dueDate, priority, notes);
    const taskName = 'Make your first task';
    const firstTask = taskFactory(taskName);
    firstTodo.addTask(firstTask);
    firstProject.initialAddTodo(firstTodo);
    user.addProject(firstProject);
  }

  const initializeSidebarView = () => {
    user.getProjects().forEach(project => {
      view.setProjectListItem(project.getName(), project.getId());
    });
  };

  const initializeProjectView = () => {
    if (user.getProjects().length !== 0) {
      const project = user.getProjects()[0];
      view.setCurrentProjectId(project.getId());
      view.setProjectTitle(project.getName());
      view.setProjectDescription(project.getDescription());
      view.setAddTodoButton();
      addTodos(project);
    }
  };

  const loadProject = (id) => {
    view.resetProjectView();
    const projects = user.getProjects();
    const projectTarget = projects.find(project => project.getId() === id);
    currentProjectId = id;
    view.setCurrentProjectId(projectTarget.getId());
    view.setProjectTitle(projectTarget.getName());
    view.setProjectDescription(projectTarget.getDescription());
    view.setAddTodoButton();
    addTodos(projectTarget);
  }

  const initializeView = () => {
    initializeSidebarView();
    initializeProjectView();
  };

  const addTodos = (project) => {
    const list = project.getTodoList();
    list.forEach(todo => {
      const todoObj = {
        projectId: project.getId(),
        todoId: todo.getId(),
        title: todo.getTitle(),
        due: todo.getDueDate(),
        priority: todo.getPriority(),
        desc: todo.getDescription(),
        tasks: todo.getCheckList().map(task => task.getName()),
        notes: todo.getNotes()
      };
      todo.bindOnTaskListChange(onTaskListChanged);
      view.addTodoCard(todoObj);
    });
  };

  const addSubmitProjectEvent = () => {
    view.bindSubmitProject(handleSubmitProject);
  };

  const addSubmitTodoEvent = () => {
    view.bindSubmitTodo(handleSubmitTodo);
  };

  // Temporary implementation. In future reset only the task list of a
  // todo card instead of all the todo cards in a project.
  const onTaskListChanged = (todoId) => {
    const currentProject = user.getProjectById(currentProjectId);
    view.resetTodos();
    addTodos(currentProject);
  };

  const onTodoListChanged = () => {
    const currentProject = user.getProjectById(currentProjectId);
    const todoList = currentProject.getTodoList();
    const addedTodo = todoList[todoList.length-1];
    const todoObj = {
      projectId: currentProjectId,
      todoId: addedTodo.getId(),
      title: addedTodo.getTitle(),
      due: addedTodo.getDueDate(),
      priority: addedTodo.getPriority(),
      desc: addedTodo.getDescription(),
      tasks: addedTodo.getCheckList().map(task => task.getName()),
      notes: addedTodo.getNotes()
    }
    view.addTodoCard(todoObj);
  };

  const onProjectListChange = () => {
    const projects = user.getProjects();
    const projectTarget = projects[projects.length-1];
    const projectName = projectTarget.getName();
    const projectId = projectTarget.getId();
    view.setProjectListItem(projectName, projectId);
  };

  const onProjectSwitch = (id) => {
    loadProject(id);
  };

  const handleSubmitTask = (projectId, todoId, taskName) => {
    const newTask = taskFactory(taskName);
    const projectTarget = user.getProjectById(projectId);
    const todoTarget = projectTarget.getTodoById(todoId);
    todoTarget.addTask(newTask);
  }

  const handleSubmitTodo = (todo) => {
    const currentProject = user.getProjectById(todo.projectId);
    const todoId = currentProject.getTodoIdCounter();
    currentProject.incrementTodoIdCounter();
    const newTodo = todoFactory(
      todoId,
      todo.title,
      todo.desc,
      todo.due,
      todo.priority,
      todo.notes
    );
    newTodo.bindOnTaskListChange(onTaskListChanged);
    currentProject.addTodo(newTodo);
  }

  const handleSubmitProject = (name) => {
    const desc = 'This is your project. This text blurb is your project description, put anything here.';
    const newProject = projectFactory(name, desc, user.getProjectIdCounter());
    newProject.bindOnTodoListChanged(onTodoListChanged);
    user.addProject(newProject);
    user.incrementProjectIdCounter();
  };
  
  initializeUser();
  view.bindAddTask(handleSubmitTask);
  view.bindAddTodo(addSubmitTodoEvent);
  view.bindAddProject(addSubmitProjectEvent);
  user.bindProjectListChanged(onProjectListChange);
  view.bindChangeProject(onProjectSwitch);

  return { initializeView };
})();

export default controller;