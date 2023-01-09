import user from "./user";
import projectFactory from './project'
import todoFactory from "./todo";
import taskFactory from "./task";
import view from './view';
import moment from "moment";

const controller = (() => {
  let currentProjectId = user.getProjectIdCounter();

  const initializeUser = () => {
    const projectName = 'Your Project';
    const projectDesc = 'This is your project. Add your todos here. This text blurb is your project description, put anything here.';
    const projectId = user.getProjectIdCounter();
    currentProjectId = user.getProjectIdCounter();
    const firstProject = projectFactory(projectName, projectDesc, projectId);
    firstProject.bindOnTodoListChanged(onTodoListChanged);
    const todoId = firstProject.getTodoIdCounter();
    const todoTitle = 'To do';
    const todoDesc = 'This is a todo. This text blurb is the editable todo description.';
    const dueDate = `${moment().format('YYYY-MM-DD h:mm')}`;
    const priority = 'Urgent';
    const notes = 'Add notes and any additional thoughts here';
    const firstTodo = todoFactory(todoId, todoTitle, todoDesc, dueDate, priority, notes);
    const taskName = 'Make your first task';
    const firstTask = taskFactory(taskName, firstTodo.getTaskIdCounter());
    firstTodo.addTask(firstTask);
    firstProject.initialAddTodo(firstTodo);
    user.addProject(firstProject);
  }

  const initializeSidebarView = () => {
    user.getProjects().forEach(project => {
      view.setProjectListItem(project.getName(), project.getId());
    });
  };

  const loadProject = (project) => {
    view.setProjectTitle(project.getName());
    view.setProjectDescription(project.getDescription());
    view.setTodoList();
    view.setAddTodoButton();
    addTodos(project);
  }

  const initializeProjectView = () => {
    if (user.getProjects().length !== 0) {
      const project = user.getProjects()[0];
      loadProject(project);
    }
  };

  const loadNewProject = (id) => {
    view.resetProjectView();
    const projectTarget = user.getProjectById(id);
    currentProjectId = id;
    loadProject(projectTarget);
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
        isMinimized: todo.checkIsMinimized(),
        tasks: todo.getCheckList().map(task => ({
          name: task.getName(),
          id: task.getId(),
          isCompleted: task.checkCompleted()
        })),
        notes: todo.getNotes()
      };
      todo.bindOnTaskListChange(onTaskListChanged);
      todo.bindOnTodoChange(onTodoChanged);
      view.addTodoCard(todoObj);
    });
  };

  const addSubmitProjectEvent = () => {
    view.bindSubmitProject(handleSubmitProject);
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

  const onProjectListChange = () => {
    view.resetProjectList();
    user.getProjects().forEach(project => {
      view.setProjectListItem(project.getName(), project.getId());
    });
  };

  const onProjectSwitch = (id) => {
    loadNewProject(id);
  };

  const handleSubmitTask = (projectId, todoId, taskName) => {
    const projectTarget = user.getProjectById(projectId);
    const todoTarget = projectTarget.getTodoById(todoId);
    const newTask = taskFactory(taskName, todoTarget.getTaskIdCounter());
    todoTarget.addTask(newTask);
  }

  const handleSubmitTodo = (todo) => {
    const currentProject = user.getProjectById(todo.projectId);
    const todoId = currentProject.getTodoIdCounter();
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

  const getCurrentProjectId = () => {
    return currentProjectId;
  }
  
  initializeUser();
  view.bindAddTask(handleSubmitTask);
  view.bindAddTodo(addSubmitTodoEvent);
  view.bindAddProject(addSubmitProjectEvent);
  user.bindProjectListChanged(onProjectListChange);
  view.bindChangeProject(onProjectSwitch);
  view.bindToggleTask(handleTaskToggle);
  view.bindDeleteProject(handleDeleteProject);
  view.bindDeleteTask(handleDeleteTask);
  view.bindDeleteTodo(handleDeleteTodo);
  view.bindMinimizeTodo(handleMinimizeTodo);
  view.bindGetCurrentProjectId(getCurrentProjectId);

  return { initializeView };
})();

export default controller;