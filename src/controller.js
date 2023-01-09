import user from "./user";
import projectFactory from './project'
import todoFactory from "./todo";
import taskFactory from "./task";
import view from './view';
import moment from "moment";

const controller = (() => {
  let currentProjectId = user.getProjectIdCounter();
  const projectNameDefault = 'Your Project';
  const projectDescDefault = 'This is your project. Add your todos here. This text blurb is your project description, put anything here.';
  const todoTitleDefault = 'Todo';
  const todoDescDefault = 'This is a todo. This text blurb is the editable todo description.';
  const todoDateDefault = `${moment().format('YYYY-MM-DD h:mm')}`;
  const todoPriorityDefault = 'Urgent';
  const todoNotesDefault = 'Add notes and any additional thoughts here';
  const taskNameDefault = 'Make your first task';

  const addNewProject = (name, desc, id) => {
    const project = projectFactory(name, desc, id);
    project.bindOnTodoListChanged(onTodoListChanged);
    project.bindOnNameChanged(onProjectNameChanged);
    user.addProject(project);
    return project;
  };

  const addNewTodo = (project, id, title, desc, dueDate, priority, notes) => {
    const todo = todoFactory(id, title, desc, dueDate, priority, notes);
    todo.bindOnTaskListChanged(onTaskListChanged);
    project.addTodo(todo);
    return todo;
  }

  const addNewTask = (todo, name, id) => {
    const task = taskFactory(name, id);
    todo.addTask(task);
    return task;
  }

  const getCurrentProjectId = () => {
    return currentProjectId;
  };

  const initializeTodoList = () => {
    view.setTodoList();
    view.setAddTodoButton();
    const firstProject = addNewProject(projectNameDefault, projectDescDefault, currentProjectId);
    const firstTodo = addNewTodo(
      firstProject, 
      firstProject.getTodoIdCounter(), 
      todoTitleDefault, 
      todoDescDefault, 
      todoDateDefault, 
      todoPriorityDefault, 
      todoNotesDefault
    );
    addNewTask(firstTodo, taskNameDefault, firstTodo.getTaskIdCounter());
  }

  const initializeSidebarView = () => {
    view.setProjectListItem(projectNameDefault, currentProjectId);
  };

  const loadProjectInfo = (name, desc) => {
    view.setProjectName(name);
    view.setProjectDescription(desc);
  }

  const loadProject = (project) => {
    loadProjectInfo(project.getName(), project.getDescription())
    view.setTodoList();
    view.setAddTodoButton();
    addTodos(project);
  }

  const initializeProjectView = () => {
    loadProjectInfo(projectNameDefault, projectDescDefault);
    initializeTodoList();
  };

  const loadNewProject = (id) => {
    view.resetProjectView();
    const projectTarget = user.getProjectById(id);
    currentProjectId = id;
    loadProject(projectTarget);
  }

  const initializeView = () => {
    view.initializeView();
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
        isMinimized: todo.checkIsMinimized(),
        tasks: todo.getCheckList().map(task => ({
          name: task.getName(),
          id: task.getId(),
          isCompleted: task.checkCompleted()
        })),
        notes: todo.getNotes()
      };
      todo.bindOnTaskListChanged(onTaskListChanged);
      todo.bindOnTodoChanged(onTodoChanged);
      view.addTodoCard(todoObj);
    });
  };

  const addSubmitTodoEvent = () => {
    view.bindSubmitTodo(handleSubmitTodo);
  };

  const refreshTodoList = () => {
    const currentProject = user.getProjectById(currentProjectId);
    view.resetTodos();
    addTodos(currentProject);
  };

  // Temporary implementation. In future reset only the task list of a
  // todo card instead of all the todo cards in a project.
  const onTaskListChanged = () => {
    refreshTodoList();
  };

  const onTodoListChanged = () => {
    refreshTodoList();
  };

  const onTodoChanged = () => {
    refreshTodoList();
  }

  const onProjectListChanged = () => {
    view.resetProjectList();
    user.getProjects().forEach(project => {
      view.setProjectListItem(project.getName(), project.getId());
    });
  };

  const onProjectSwitch = (id) => {
    loadNewProject(id);
  };

  const onProjectNameChanged = () => {

  };

  const handleSubmitTask = (projectId, todoId, taskName) => {
    const projectTarget = user.getProjectById(projectId);
    const todoTarget = projectTarget.getTodoById(todoId);
    addNewTask(todoTarget, taskName, todoTarget.getTaskIdCounter());
  }

  const handleAddTodo = (todo) => {
    const currentProject = user.getProjectById(todo.projectId);
    const todoId = currentProject.getTodoIdCounter();
    addNewTodo(currentProject, 
      todoId, 
      todo.title, 
      todo.desc, 
      todo.due, 
      todo.priority, 
      todo.notes
    );
  }

  const handleAddProject = (name) => {
    const desc = 'This is your project. This text blurb is your project description, put anything here.';
    addNewProject(name, desc, user.getProjectIdCounter());
  };

  const handleTaskToggle = (todoId, taskId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    const task = todo.getTaskById(taskId);
    task.toggleComplete();
  };

  const handleDeleteProject = (projectId) => {
    const project = user.getProjectById(projectId);
    user.removeProject(project);
  };

  const handleDeleteTodo = (todoId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    project.removeTodo(todo);
  };

  const handleDeleteTask = (todoId, taskId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    const task = todo.getTaskById(taskId);
    todo.removeTask(task);
  };

  const handleMinimizeTodo = (todoId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    todo.toggleMinimize();
  };

  const handleEditProjectName = (newName) => {
    const project = user.getProjectById(currentProjectId);
    project.editName(newName);
  };

  view.bindAddTask(handleSubmitTask);
  view.bindAddTodo(handleAddTodo);
  view.bindAddProject(handleAddProject);
  user.bindProjectListChanged(onProjectListChanged);
  view.bindChangeProject(onProjectSwitch);
  view.bindToggleTask(handleTaskToggle);
  view.bindDeleteProject(handleDeleteProject);
  view.bindDeleteTask(handleDeleteTask);
  view.bindDeleteTodo(handleDeleteTodo);
  view.bindMinimizeTodo(handleMinimizeTodo);
  view.bindGetCurrentProjectId(getCurrentProjectId);
  view.bindEditProjectName(handleEditProjectName);
  

  return { initializeView };
})();

export default controller;